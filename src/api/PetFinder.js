import axios from 'axios';
import {
  ANIMAL_TYPES, ANIMAL_SIZES, ANIMAL_AGES, LOCATIONS,
} from '../helpers/constants';
import { PET_FINDER_PUBLIC_KEY, PET_FINDER_SECRET_KEY } from '../helpers/keys';

const PetFinder = () => {
  const PETS_API_BASE_V2 = 'https://api.petfinder.com/v2/';

  const onSuccess = ({ data }) => data;
  const onFail = error => error;
  const requestToken = async (
    publicKey = PET_FINDER_PUBLIC_KEY, secretKey = PET_FINDER_SECRET_KEY) => {
    let request = await axios.post(`${PETS_API_BASE_V2}oauth2/token`, {
      grant_type: 'client_credentials',
      client_id: `${publicKey}`,
      client_secret: `${secretKey}`,
    }).then(onSuccess, onFail);

    const { isAxiosError } = { ...request };
    if (isAxiosError) {
      request = await axios.post(`${PETS_API_BASE_V2}oauth2/token`, {
        grant_type: 'client_credentials',
        client_id: `${publicKey}`,
        client_secret: `${secretKey}`,
      }).then(onSuccess, onFail);
    }

    let sessionVar = {
      access_token: '',
      expires_at: 0,
    };
    if (request.access_token) {
      sessionVar = {
        access_token: request.access_token,
        expires_at: Math.abs(new Date()) + 1000 * request.expires_in,
      };
    }
    localStorage.setItem('sessionVar', JSON.stringify(sessionVar));
  };
  const getToken = async () => {
    let sessionObject;
    let sessionVar = (localStorage.getItem('sessionVar') || '');

    if (sessionVar.length > 0) {
      sessionObject = JSON.parse(sessionVar);
      if ((Math.abs(new Date()) > sessionObject.expires_at && sessionObject.expires_at > 0)
        || sessionObject.expires_at === 0) {
        await requestToken();
        sessionVar = (localStorage.getItem('sessionVar') || '');
        sessionObject = JSON.parse(sessionVar);
      }
    } else {
      await requestToken();
      sessionVar = (localStorage.getItem('sessionVar') || '');
      sessionObject = JSON.parse(sessionVar);
    }

    return sessionObject.access_token;
  };
  const getConfig = async params => {
    const accessToken = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params,
    };

    return config;
  };
  const makeRequest = async (path, params = {}) => {
    let request;
    let jsonConfig = await getConfig(params);

    request = await axios.get(`${PETS_API_BASE_V2}${path}`, jsonConfig).then(onSuccess, onFail);
    let { isAxiosError } = { ...request };
    if (isAxiosError) {
      jsonConfig = await getConfig(params);
      request = await axios.get(`${PETS_API_BASE_V2}${path}`, jsonConfig).then(onSuccess, onFail);
      isAxiosError = { ...request }.isAxiosError;
      if (isAxiosError) {
        return {
          error: true,
        };
      }
    }

    return request;
  };

  const getPetsList = filterParams => makeRequest('animals', filterParams);
  const getPreviousPetsList = href => makeRequest(href.replace('/v2/', ''));
  const getNextPetsList = href => makeRequest(href.replace('/v2/', ''));
  const getPetInfo = id => makeRequest(`animals/${id}`);

  const getTypes = () => ANIMAL_TYPES;
  const getSizes = () => ANIMAL_SIZES;
  const getAges = () => ANIMAL_AGES;
  const getCities = () => LOCATIONS;

  return {
    getPetsList,
    getPreviousPetsList,
    getNextPetsList,
    getPetInfo,

    getTypes,
    getSizes,
    getAges,
    getCities,
  };
};

export default PetFinder;
