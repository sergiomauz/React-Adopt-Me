import axios from 'axios';

const PetFinder = () => {
  const PETS_API_BASE = 'http://pets.dev-apis.com/';
  // const PETS_API_BASE = 'https://api.petfinder.com/v2/';

  const onSuccess = ({ data }) => data;
  const onFail = err => err;
  const makeRequest = (path, params = {}) => axios.get(`${PETS_API_BASE}${path}`, { params }).then(onSuccess, onFail);

  const types = async () => makeRequest('types');
  const showPet = async id => makeRequest(`animals/${id}`);
  const petsList = async filterParams => makeRequest('animals', filterParams);

  return {
    types, petsList, showPet,
  };
};

export default PetFinder;
