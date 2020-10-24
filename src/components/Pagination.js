/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPreviousPetsList, getNextPetsList } from '../actions/PetActions';
import Style from '../styles/pagination.module.css';

const mapDispatchToProps = {
  getNextPetsList,
  getPreviousPetsList,
};

const Pagination = props => {
  const { info, getNextPetsList, getPreviousPetsList } = props;
  const { _links, current_page, total_pages } = info;

  return (
    <>
      <div className={Style.pagination}>
        <div>{`Page ${current_page} of ${total_pages}`}</div>
        {
          _links
          && (
            <>
              {
                _links.previous
                && <button type="button" onClick={() => getPreviousPetsList()} className={Style.move}>🡰 Previous  </button>
              }
              {
                _links.next
                && <button type="button" onClick={() => getNextPetsList()} className={Style.move}>Next 🡲</button>
              }
            </>
          )
        }
      </div>
    </>
  );
};

Pagination.propTypes = {
  getNextPetsList: PropTypes.func.isRequired,
  getPreviousPetsList: PropTypes.func.isRequired,
  info: PropTypes.shape({
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
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Pagination);
