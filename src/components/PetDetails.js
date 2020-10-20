import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PetFinder from '../api/PetFinder';
import { getPetInfo } from '../actions/PetActions';

const mapStateToProps = state => ({
  pet: state.pets.animal,
});

const mapDispatchToProps = {
  getPetInfo,
};

const PetDetails = props => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function asyncGetPetInfo() {
      const body = await PetFinder().getPetInfo(id);
      setPet(body.animal);
    }
    asyncGetPetInfo();
    setLoading(false);
  }, []);

  return (
    <>
      <h3>PET DETAILS</h3>
      {
        (
          loading
          && <span>Loading...</span>
        )
      }
      {
        (pet
          && (
            <>
              {`${pet.published_at.slice(0, 10)}`}
              <br />
              {`${pet.type} | ${pet.name} | ${pet.age} | ${pet.gender} | ${pet.size}`}
              <br />
              {`${pet.breeds.mixed}` ? 'Crossbred' : `${pet.breeds.primary}`}
              <p>{pet.description}</p>
              <img src={pet.photos[0].large} alt="" />
              <br />
              <div>
                Contact:
                <ul>
                  <li>
                    Email:
                    {pet.contact.email}
                  </li>
                  <li>
                    Phone:
                    {pet.contact.phone}
                  </li>
                  <li>
                    {`City: ${pet.contact.address.city}, ${pet.contact.address.state}`}
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pet: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      large: PropTypes.string,
    })),
    breeds: PropTypes.shape({
      mixed: PropTypes.bool,
    }),
  }),
};

PetDetails.defaultProps = {
  pet: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
