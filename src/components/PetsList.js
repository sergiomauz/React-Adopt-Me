import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPetsList } from '../actions/PetActions';
import Pet from './Pet';

const mapStateToProps = state => (
  {
    pets: state.pets.animals,
  }
);

const mapDispatchToProps = {
  getPetsList,
};

class PetsList extends Component {
  componentDidMount() {
    const { getPetsList } = this.props;
    getPetsList();
  }

  render() {
    const { pets } = this.props;
    return (
      <ul>
        {
          pets.map(
            pet => (
              <Pet key={pet.id} info={pet} />
            ),
          )
        }
      </ul>
    );
  }
}

PetsList.propTypes = {
  getPetsList: PropTypes.func.isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    age: PropTypes.string,
    gender: PropTypes.string,
  })),
};

PetsList.defaultProps = {
  pets: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
