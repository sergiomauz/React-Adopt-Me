import React from 'react';
import PropTypes from 'prop-types';

const Pet = props => {
  const { info } = props;

  return (
    <li>
      {info.id}
      {' | '}
      {info.age}
      {' | '}
      {info.gender}
    </li>
  );
};

Pet.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    age: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
};

export default Pet;
