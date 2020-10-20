import {
  GET_PETS_LIST, PREVIOUS_PETS_LIST, NEXT_PETS_LIST, GET_PET_INFO,
} from '../actions/types';

const initialState = {};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS_LIST:
    case PREVIOUS_PETS_LIST:
    case NEXT_PETS_LIST:
    case GET_PET_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
