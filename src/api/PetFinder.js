import axios from 'axios';
import { PET_FINDER_PUBLIC_KEY, PET_FINDER_SECRET_KEY } from '../helper/keys';

const PetFinder = () => {
  const PETS_API_BASE_V2 = 'https://api.petfinder.com/v2/';

  const onSuccess = ({ data }) => data;
  const onFail = err => err;
  const requestToken = async (
    publicKey = PET_FINDER_PUBLIC_KEY, secretKey = PET_FINDER_SECRET_KEY) => {
    const request = await axios.post(`${PETS_API_BASE_V2}oauth2/token`, {
      grant_type: 'client_credentials',
      client_id: `${publicKey}`,
      client_secret: `${secretKey}`,
    }).then(onSuccess, onFail);

    if (request.access_token) {
      localStorage.setItem('access_token', request.access_token);
    }
  };

  const makeGetRequest = async (path, params = {}) => {
    if (!localStorage.getItem('access_token')) {
      await requestToken();
    }

    const accessToken = (localStorage.getItem('access_token') || '');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params,
    };

    return axios.get(`${PETS_API_BASE_V2}${path}`, config).then(onSuccess, onFail);
  };

  const getPetsList = filterParams => makeGetRequest('animals', filterParams);
  const getPreviousPetsList = href => makeGetRequest(href);
  const getNextPetsList = href => makeGetRequest(href);
  const getPetInfo = id => makeGetRequest(`animals/${id}`);

  const getTypes = () => ['Dog', 'Cat', 'Rabbit', 'Small and Furry', 'Horse', 'Bird', 'Scales Fins and Other', 'Barnyard'];
  const getSizes = () => ['Small', 'Medium', 'Large', 'Xlarge'];
  const getAges = () => ['Baby', 'Young', 'Adult', 'Senior'];
  const getCities = () => ['Seattle, WA', 'San Francisco, CA'];

  return {
    getPetsList,
    getPreviousPetsList,
    getNextPetsList,
    getPetInfo,
    getTypes,
    getSizes,
    getAges,
    getCities,

    requestToken,
  };
};

export default PetFinder;
