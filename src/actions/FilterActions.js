import { CHANGE_PET_FILTER } from './types';

const changePetFilterParams = params => ({
  type: CHANGE_PET_FILTER,
  filter: params,
});

export default changePetFilterParams;
