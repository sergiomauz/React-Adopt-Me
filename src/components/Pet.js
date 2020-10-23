import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_PETCARD } from '../helper/constants';
import Style from '../styles/petcard.module.css';

const Pet = props => {
  const { info } = props;

  return (
    <li className={Style.petCard}>
      {
        info
        && (
          <>
            <Link to={`pet/${info.id}`} target="_blank">
              {
                (info.photos.length > 0)
                && <img src={info.photos[0].small} alt={info.name} className={Style.petPhoto} />
              }
              {
                (info.photos.length === 0)
                && <img src={IMG_PETCARD} alt={info.name} className={Style.petPhoto} />
              }
              <div className={Style.petName}>
                {
                  info.name.length > 15 ? `${info.name.slice(0, 20)} ...` : `${info.name}`
                }
              </div>
            </Link>
          </>
        )
      }
    </li>
  );
};

Pet.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      small: PropTypes.string,
    })),
  }).isRequired,
};

export default Pet;
