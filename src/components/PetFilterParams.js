import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PetFinder from '../api/PetFinder';
import changePetFilterParams from '../actions/FilterActions';
import { getPetsList } from '../actions/PetActions';

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  changePetFilterParams,
  getPetsList,
};

const FilterPetsParams = props => {
  const dropType = useRef(null);
  const dropSize = useRef(null);
  const dropAge = useRef(null);
  const dropCity = useRef(null);

  const { getPetsList, changePetFilterParams } = props;

  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [ages, setAges] = useState([]);
  const [cities, setCities] = useState([]);

  const getParams = () => {
    changePetFilterParams({
      type: dropType.current.value,
      size: dropSize.current.value,
      age: dropAge.current.value,
      location: dropCity.current.value,
      status: 'adoptable',
      page: 1,
    });
    getPetsList();
  };

  useEffect(() => {
    setTypes(PetFinder().getTypes());
    setSizes(PetFinder().getSizes());
    setAges(PetFinder().getAges());
    setCities(PetFinder().getCities());
  }, []);

  return (
    <>
      <label htmlFor={dropCity}>
        City:
        <select ref={dropCity} onChange={() => getParams()}>
          <option value="">All</option>
          {
            cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor={dropType}>
        Animal:
        <select ref={dropType} onChange={() => getParams()}>
          <option value="">All</option>
          {
            types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor={dropSize}>
        Size:
        <select ref={dropSize} onChange={() => getParams()}>
          <option value="">All</option>
          {
            sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor={dropAge}>
        Age:
        <select ref={dropAge} onChange={() => getParams()}>
          <option value="">All</option>
          {
            ages.map(age => (
              <option key={age} value={age}>{age}</option>
            ))
          }
        </select>
      </label>
    </>
  );
};

FilterPetsParams.propTypes = {
  changePetFilterParams: PropTypes.func.isRequired,
  getPetsList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPetsParams);
