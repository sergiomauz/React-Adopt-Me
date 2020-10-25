import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from '../styles/petcard.module.css';

const PetCard = props => {
  const { info } = props;

  return (
    <li className={Style.petCard}>
      {
        info
        && (
          <>
            <Link to={`pet/${info.id}`} target="_blank" className={Style.cardLink}>
              {
                (info.photos.length > 0)
                && <img src={info.photos[0].small} alt={info.name} className={Style.petPhoto} />
              }
              {
                (info.photos.length === 0)
                && <div className={Style.petNoPhoto} />
              }
              <div className={Style.petName}>
                {
                  info.name.length > 15 ? `${info.name.slice(0, 15)} ...` : `${info.name}`
                }
              </div>
            </Link>
          </>
        )
      }
    </li>
  );
};

PetCard.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      small: PropTypes.string,
    })),
  }).isRequired,
};

export default PetCard;
