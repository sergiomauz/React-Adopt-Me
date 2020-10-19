import { CHANGE_PET_FILTER } from '../actions/types';

const initialState = {
  page: 1,
  type: '',
  size: '',
  status: 'adoptable',
  location: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PET_FILTER:
      return {
        ...action.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
