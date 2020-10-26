import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import Pagination from '../../components/Pagination';

afterEach(cleanup);

const emptyPagination = {};
const defaultPagination = {
  _links: {
    next: {
      href: '',
    },
  },
  current_page: 1,
};

const composeEnhancers = compose;

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PETS_LIST':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const defaultStore = createStore(reducer, null, composeEnhancers(applyMiddleware(thunk)));

const renderWithRedux = (component, { store = defaultStore } = {}) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

it('Renders using Redux without crashing if there is not information for pagination', () => {
  renderWithRedux(<Pagination info={emptyPagination} />);
});

it('Renders using Redux without crashing if there is information for only for next pagination', () => {
  const { getByTestId } = renderWithRedux(<Pagination info={defaultPagination} />);
  expect(getByTestId('nextButton')).toBeTruthy();
});

it('Renders using Redux without crashing if there is information for pagination', () => {
  const { getByTestId } = renderWithRedux(<Pagination info={defaultPagination} />);
  expect(getByTestId('pageIndicator').innerHTML).toContain('Page 1 of ');
});
