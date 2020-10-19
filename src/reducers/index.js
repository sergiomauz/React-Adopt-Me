import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import petReducer from './PetReducer';

export default combineReducers({
  pets: petReducer,
  filter: filterReducer,
});
