import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPetInfo } from '../actions/PetActions';

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
      <h3>PET DETAILS</h3>
      {
        loading
        && <span>Loading...</span>
      }
      {
        (animal
          && (
            <>
              {`${animal.published_at.slice(0, 10)}`}
              <br />
              {`${animal.type} | ${animal.name} | ${animal.age} | ${animal.gender} | ${animal.size}`}
              <br />
              {`${animal.breeds.mixed}` ? 'Crossbred' : `${animal.breeds.primary}`}
              <p>{animal.description}</p>
              <img src={animal.photos[0].large} alt="" />
              <br />
              <div>
                Contact:
                <ul>
                  <li>
                    Email:
                    {animal.contact.email}
                  </li>
                  <li>
                    Phone:
                    {animal.contact.phone}
                  </li>
                  <li>
                    {`City: ${animal.contact.address.city}, ${animal.contact.address.state}`}
                  </li>
                </ul>
              </div>
            </>
          )
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
