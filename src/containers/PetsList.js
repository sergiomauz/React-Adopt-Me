import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PetCard from '../components/PetCard';
import Pagination from './Pagination';
import FilterParams from './FilterParams';
import { getPetsList } from '../actions/PetActions';
import Style from '../styles/petlist.module.css';

const mapStateToProps = state => ({
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
        <div className={Style.divBanner} />
        <FilterParams />
        {
          pagination && <Pagination info={pagination} />
        }
        <ul className={Style.petList}>
          {
            animals.map(
              pet => (
                <PetCard key={pet.id} info={pet} />
              ),
            )
          }
        </ul>
        {
          pagination && <Pagination info={pagination} />
        }
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
  pagination: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
