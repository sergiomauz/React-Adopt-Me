import PetFinder from '../api/PetFinder';
import { GET_PETS_LIST, SHOW_PET } from './types';

const getPetsList = filterParams => dispatch => {
  const request = PetFinder().petsList(filterParams);
  dispatch({
    type: GET_PETS_LIST,
    payload: request.data,
  });
};

const getPet = id => dispatch => {
  const request = PetFinder().showPet(id);
  dispatch({
    type: SHOW_PET,
    payload: request.data,
  });
};

export { getPetsList, getPet };
