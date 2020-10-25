/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PetFinder from '../api/PetFinder';
import { getPetsList, changePetFilterParams } from '../actions/PetActions';
import { MANDATORY_ONCHANGE_FILTER } from '../helper/constants';
import Style from '../styles/petfilter.module.css';

// const mapStateToProps = state => ({
//   filter: state.pets.filter,
// });

const mapDispatchToProps = {
  changePetFilterParams,
  getPetsList,
};

const FilterParams = props => {
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
    const newFilter = MANDATORY_ONCHANGE_FILTER;

    if (dropType.current.value.length > 0) {
      newFilter.filter.type = dropType.current.value;
    }
    if (dropSize.current.value.length > 0) {
      newFilter.filter.size = dropSize.current.value;
    }
    if (dropAge.current.value.length > 0) {
      newFilter.filter.age = dropAge.current.value;
    }
    if (dropCity.current.value.length > 0) {
      newFilter.filter.location = dropCity.current.value;
    }

    changePetFilterParams(newFilter);
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
      <div className={Style.labelFilter}>FIND A FRIEND BY: </div>
      <div className={Style.filterContainer}>
        <label>
          <div className={Style.labelText}>City (near to):</div>
          <select ref={dropCity} onChange={() => getParams()} className={Style.dropFilter}>
            {
              cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))
            }
          </select>
        </label>
        <label>
          <div className={Style.labelText}>Animal:</div>
          <select ref={dropType} onChange={() => getParams()} className={Style.dropFilter}>
            <option value="">All</option>
            {
              types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))
            }
          </select>
        </label>
        <label>
          <div className={Style.labelText}>Size:</div>
          <select ref={dropSize} onChange={() => getParams()} className={Style.dropFilter}>
            <option value="">All</option>
            {
              sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))
            }
          </select>
        </label>
        <label>
          <div className={Style.labelText}>Age:</div>
          <select ref={dropAge} onChange={() => getParams()} className={Style.dropFilter}>
            <option value="">All</option>
            {
              ages.map(age => (
                <option key={age} value={age}>{age}</option>
              ))
            }
          </select>
        </label>
      </div>
    </>
  );
};

FilterParams.propTypes = {
  changePetFilterParams: PropTypes.func.isRequired,
  getPetsList: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterParams);
