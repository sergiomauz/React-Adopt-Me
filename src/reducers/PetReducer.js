import { GET_PETS_LIST } from '../actions/types';

const initialState = {};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
