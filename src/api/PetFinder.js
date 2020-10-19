import axios from 'axios';

const PetFinder = () => {
  const PETS_API_BASE = 'http://pets.dev-apis.com/';
  // const PETS_API_BASE = 'https://api.petfinder.com/v2/';

  const onSuccess = ({ data }) => data;
  const onFail = err => err;
  const makeRequest = (path, params = {}) => axios.get(`${PETS_API_BASE}${path}`, { params }).then(onSuccess, onFail);

  const getPetsList = filterParams => makeRequest('animals', filterParams);
  const getPreviousPetsList = href => makeRequest(href.replace('/v2/', ''));
  const getNextPetsList = href => makeRequest(href.replace('/v2/', ''));
  const getPetInfo = id => makeRequest(`animals/${id}`);

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
  };
};

export default PetFinder;
