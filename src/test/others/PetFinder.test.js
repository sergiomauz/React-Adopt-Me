import PetFinder from '../../api/PetFinder';

let firstPetsList;
const axiosError = { error: true };
jest.setTimeout(60000);

it('Get information of first list of pets from API', async () => {
  firstPetsList = await PetFinder().getPetsList();
  if (!firstPetsList.error) {
    expect(firstPetsList.animals).toBeTruthy();
  } else {
    expect(firstPetsList).toEqual(axiosError);
  }
});

it('Get information of the first pet of first list of pets from API', async () => {
  if (!firstPetsList.error) {
    const { id } = firstPetsList.animals[0];
    const pet = await PetFinder().getPetInfo(id);
    if (!pet.error) {
      expect(pet.animal).toBeTruthy();
    } else {
      expect(pet).toEqual(axiosError);
    }
  } else {
    expect(firstPetsList).toEqual(axiosError);
  }
});
