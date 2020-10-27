import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import FilterParams from '../../containers/FilterParams';

afterEach(cleanup);

const composeEnhancers = compose;

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PET_FILTER':
      return {
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

it('Renders using Redux without crashing', () => {
  const filterParams = renderWithRedux(<FilterParams />);
  expect(filterParams).toBeTruthy();
});
