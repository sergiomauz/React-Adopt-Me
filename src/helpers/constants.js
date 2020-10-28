const IMG_PETCARD = 'https://fakeimg.pl/150/eee/';
const IMG_PET_DETAIL = 'https://fakeimg.pl/150/eee/';

const ANIMAL_TYPES = ['Dog', 'Cat', 'Rabbit', 'Small \u0026 Furry', 'Horse', 'Bird', 'Scales, Fins \u0026 Other', 'Barnyard'];
const ANIMAL_SIZES = ['Small', 'Medium', 'Large', 'Xlarge'];
const ANIMAL_AGES = ['Baby', 'Young', 'Adult', 'Senior'];
const LOCATIONS = ['San Francisco, CA', 'New York, NY', 'Miami, FL', 'Seattle, WA', 'Austin, TX', 'Washington, DC'];

const MANDATORY_ONCHANGE_FILTER = {
  filter: {
    location: LOCATIONS[0],
    status: 'adoptable',
  },
};

export {
  IMG_PETCARD,
  IMG_PET_DETAIL,
  ANIMAL_TYPES,
  ANIMAL_SIZES,
  ANIMAL_AGES,
  LOCATIONS,
  MANDATORY_ONCHANGE_FILTER,
};
