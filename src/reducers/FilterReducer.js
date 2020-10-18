import { CHANGE_PET_FILTER } from '../actions/types';

const initialState = {
  filter: {},
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PET_FILTER:
      return {
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
