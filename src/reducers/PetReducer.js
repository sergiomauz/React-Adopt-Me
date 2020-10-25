import { MANDATORY_ONCHANGE_FILTER } from '../helpers/constants';
import {
  GET_PETS_LIST, PREVIOUS_PETS_LIST, NEXT_PETS_LIST, GET_PET_INFO, CHANGE_PET_FILTER,
} from '../actions/types';

const initialState = MANDATORY_ONCHANGE_FILTER;

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
    case CHANGE_PET_FILTER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
