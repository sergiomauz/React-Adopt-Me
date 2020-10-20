import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPetInfo } from '../actions/PetActions';

const mapStateToProps = state => ({
  pet: state.pets.animal,
});

const mapDispatchToProps = {
  getPetInfo,
};

class PetDetails extends Component {
  componentDidMount() {
    const { match, getPetInfo } = this.props;
    const { params } = match;
    const { id } = params;

    getPetInfo(id);

    console.log(this.props);
  }

  render() {
    const { pet } = this.props;

    return (
      <>
        <h3>PET DETAILS</h3>
        {
          `${pet.type} | ${pet.name} | ${pet.age} | ${pet.gender} | ${pet.size}`
        }
        <br />
        <p>{pet.description}</p>
        {/* <img src={pet.photos[0].large} alt="" /> */}
        {/* {
          `${pet.breeds.mixed}` ? 'Crossbred' : `${pet.breeds.primary}`
        } */}
      </>
    );
  }
}

PetDetails.propTypes = {
  getPetInfo: PropTypes.func.isRequired,
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
