import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pet from './Pet';
import Pagination from './Pagination';
import FilterParams from './PetFilterParams';
import { getPetsList } from '../actions/PetActions';

const mapStateToProps = state => ({
  filter: state.pets.filter,
  animals: state.pets.animals,
  pagination: state.pets.pagination,
});

const mapDispatchToProps = {
  getPetsList,
};

class PetsList extends Component {
  componentDidMount() {
    const { getPetsList } = this.props;
    getPetsList();
  }

  render() {
    const {
      animals, pagination,
    } = this.props;

    return (
      <>
        <FilterParams />
        <ul>
          {
            animals.map(
              pet => (
                <Pet key={pet.id} info={pet} />
              ),
            )
          }
        </ul>
        <Pagination info={pagination} />
      </>
    );
  }
}

PetsList.propTypes = {
  getPetsList: PropTypes.func.isRequired,
  animals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      small: PropTypes.string,
    })),
  })),
  pagination: PropTypes.shape({
    count_per_page: PropTypes.number,
    total_count: PropTypes.number,
    current_page: PropTypes.number,
    total_pages: PropTypes.number,
    _links: PropTypes.shape({
      previous: PropTypes.shape({
        href: PropTypes.string,
      }),
      next: PropTypes.shape({
        href: PropTypes.string,
      }),
    }),
  }),
};

PetsList.defaultProps = {
  animals: [],
  pagination: {
    count_per_page: 20,
    total_count: 0,
    current_page: 1,
    total_pages: 0,
    _links: {
      previous: {
        href: '#',
      },
      next: {
        href: '#',
      },
    },
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
