import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_PETCARD } from '../helper/constants';
import Style from '../styles/petcard.module.css';

const Pet = props => {
  const { info } = props;

  return (
    <li>
      {
        info
        && (
          <>
            <div className={Style.petCard}>
              {info.name}
              {info.type}
              {info.age}
              {info.gender}
              <Link to={`pet/${info.id}`} target="_blank">Detail</Link>
              {
                (info.photos.length > 0)
                && <img src={info.photos[0].small} alt={info.name} className={Style.petPhoto} />
              }
              {
                (info.photos.length === 0)
                && <img src={IMG_PETCARD} alt={info.name} />
              }
            </div>
          </>
        )
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
