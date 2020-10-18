import { CHANGE_PET_FILTER } from './types';

const changePetFilter = filter => ({
  type: CHANGE_PET_FILTER,
  filter,
});

export default changePetFilter;
