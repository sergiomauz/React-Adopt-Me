import PetFinder from '../api/PetFinder';
import {
  GET_PETS_LIST, GET_PET_INFO, PREVIOUS_PETS_LIST, NEXT_PETS_LIST,
} from './types';

const getPetsList = filterParams => async dispatch => {
  const requestedData = await PetFinder().getPetsList(filterParams);
  dispatch({
    type: GET_PETS_LIST,
    payload: requestedData,
  });
};

const getPreviousPetsList = () => async (dispatch, getState) => {
  const { _links } = getState().pets.pagination;
  const { href } = _links.previous;
  const requestedData = await PetFinder().getPreviousPetsList(href);

  dispatch({
    type: PREVIOUS_PETS_LIST,
    payload: requestedData,
  });
};

const getNextPetsList = () => async (dispatch, getState) => {
  const { _links } = getState().pets.pagination;
  const { href } = _links.next;
  const requestedData = await PetFinder().getNextPetsList(href);

  dispatch({
    type: NEXT_PETS_LIST,
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

export {
  getPetsList, getPreviousPetsList, getNextPetsList, getPetInfo,
};
