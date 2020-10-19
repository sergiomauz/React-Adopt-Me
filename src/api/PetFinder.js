import axios from 'axios';

const PetFinder = () => {
  const PETS_API_BASE = 'http://pets.dev-apis.com/';
  // const PETS_API_BASE = 'https://api.petfinder.com/v2/';

  const onSuccess = ({ data }) => data;
  const onFail = err => err;
  const makeRequest = (path, params = {}) => axios.get(`${PETS_API_BASE}${path}`, { params }).then(onSuccess, onFail);

  const types = () => makeRequest('types');
  const getPetInfo = async id => makeRequest(`animals/${id}`);

  const getPetsList = async filterParams => makeRequest('animals', filterParams);
  const getPreviousPetsList = href => makeRequest(href.replace('/v2/', ''));
  const getNextPetsList = href => makeRequest(href.replace('/v2/', ''));

  return {
    types, getPetsList, getPreviousPetsList, getNextPetsList, getPetInfo,
  };
};

export default PetFinder;
