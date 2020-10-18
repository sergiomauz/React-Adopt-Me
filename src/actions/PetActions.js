import PetFinder from '../api/PetFinder';
import { GET_PETS_LIST, GET_PET_INFO } from './types';

const getPetsList = filterParams => async dispatch => {
  const requestedData = await PetFinder().getPetsList(filterParams);
  dispatch({
    type: GET_PETS_LIST,
    payload: requestedData,
  });
};

const getPetInfo = id => dispatch => {
  const requestedData = PetFinder().getPetInfo(id);
  dispatch({
    type: GET_PET_INFO,
    payload: requestedData,
  });
};

export { getPetsList, getPetInfo };
