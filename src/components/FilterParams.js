import React, { useState, useEffect } from 'react';
import PetFinder from '../api/PetFinder';

const FilterParams = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes([]);

    PetFinder().types().then(({ types }) => {
      setTypes(types.map(type => type.name));
    });
  }, []);

  return (
    <label htmlFor="dropTypes">
      Animal:
      <select id="dropTypes" name="dropTypes">
        {
          types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))
        }
      </select>
    </label>
  );
};

export default FilterParams;
