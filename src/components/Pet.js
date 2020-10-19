import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pet = props => {
  const { info } = props;

  return (
    <li>
      {
        `${info.id} | ${info.name} | ${info.type} | ${info.age} | ${info.gender} | `
      }
      <Link to={`pet/${info.id}`} target="_blank">Detail</Link>
      {
        info.photos.length > 0
        && <img src={info.photos[0].small} alt={info.name} />
      }
    </li>
  );
};

Pet.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      small: PropTypes.string,
    })),
  }).isRequired,
};

export default Pet;
