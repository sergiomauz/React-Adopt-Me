import axios from 'axios';

const PetFinder = () => {
  const PETS_API_BASE_V2 = 'https://api.petfinder.com/v2/';
  // const PETS_API_BASE = 'http://pets.dev-apis.com/';

  const onSuccess = ({ data }) => data;
  const onFail = err => err;
  const requestToken = async (publicKey = 'Js39larUwHx0BiFN1xv1wnO4vY15bwRIyqeEXvpg7ZcJhyIBNr', secretKey = '7MwOy33C8PcIbSeUTJMujb9lizo7OC8JYVUQ49WZ') => {
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
