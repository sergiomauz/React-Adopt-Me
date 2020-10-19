import { GET_PETS_LIST, PREVIOUS_PETS_LIST, NEXT_PETS_LIST } from '../actions/types';

const initialState = {};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS_LIST:
    case PREVIOUS_PETS_LIST:
    case NEXT_PETS_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
