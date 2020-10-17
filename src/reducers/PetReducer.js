import { GET_PETS_LIST } from '../actions/types';

const initialState = {
  pets: [],
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS_LIST:
      return {
        ...state,
        pets: action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
