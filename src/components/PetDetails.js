import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPetInfo } from '../actions/PetActions';
import Style from '../styles/petdetails.module.css';

const mapStateToProps = state => ({
  animal: state.pets.animal,
});

const mapDispatchToProps = {
  getPetInfo,
};

const PetDetails = props => {
  const { match, getPetInfo, animal } = props;
  const { params } = match;
  const { id } = params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPetInfo(id);
    setLoading(false);
  }, [id, getPetInfo]);

  return (
    <>
      <h3 className={Style.labelTitle}>PET DETAILS</h3>
      {
        loading
        && <span>Loading...</span>
      }
      {
        animal
        && (
          <>
            <div className={Style.subContainer}>
              <h2 className={Style.labelName}>{animal.name}</h2>
              <div className={Style.labelName}>{`Published at: ${animal.published_at.slice(0, 10)}`}</div>
              <hr />
              <div className={Style.dataProfileContainer}>
                <ul className={Style.informationList}>
                  <li className={Style.itemInfoList}>PROFILE</li>
                  <li className={Style.itemInfoList}>
                    <strong>Type: </strong>
                    {animal.type}
                  </li>
                  <li className={Style.itemInfoList}>
                    <strong>Gender: </strong>
                    {animal.gender}
                  </li>
                  <li className={Style.itemInfoList}>
                    <strong>Age: </strong>
                    {animal.age}
                  </li>
                  <li className={Style.itemInfoList}>
                    <strong>Size: </strong>
                    {animal.size}
                  </li>
                  <li className={Style.itemInfoList}>
                    <strong>Breed: </strong>
                    {`${animal.breeds.mixed}` ? 'Crossbred' : `${animal.breeds.primary}`}
                  </li>
                </ul>
                <ul className={Style.informationList}>
                  <li className={Style.itemInfoList}>CONTACT</li>
                  <li className={Style.itemInfoList}>
                    <strong>Email: </strong>
                    {animal.contact.email}
                  </li>
                  <li className={Style.itemInfoList}>
                    <strong>Phone: </strong>
                    {animal.contact.phone}
                  </li>
                  <li className={Style.itemInfoList}>
                    <strong>Location: </strong>
                    {`${animal.contact.address.city}, ${animal.contact.address.state}`}
                  </li>
                </ul>
              </div>
              <hr />
              <h4>Description:</h4>
              <p className={Style.description}>
                {animal.description ? animal.description : 'Description not available.'}
              </p>
              <div className={Style.centerImage}>
                {
                  (animal.photos.length > 0)
                  && (
                    <img
                      src={animal.photos[0].large}
                      alt={animal.name}
                      className={Style.petPhoto}
                    />
                  )
                }
                {
                  (animal.photos.length === 0)
                  && <div className={Style.petNoPhoto} />
                }
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

PetDetails.propTypes = {
  getPetInfo: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  animal: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
    published_at: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      large: PropTypes.string,
    })),
    breeds: PropTypes.shape({
      mixed: PropTypes.bool,
      primary: PropTypes.string,
    }),
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string,
      }),
    }),
  }),
};

PetDetails.defaultProps = {
  animal: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
