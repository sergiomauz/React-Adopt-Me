import { combineReducers } from 'redux';
import petReducer from './PetReducer';

export default combineReducers({
  pets: petReducer,
});
