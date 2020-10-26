import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import PetsList from '../../components/PetsList';

afterEach(cleanup);

const initialState = {
  pets: {
    animals: [
      {
        id: 147852369,
        photos: [],
        name: 'Chewbaca',
        published_at: '2020-10-25',
        breeds: {
          mixed: true,
        },
        contact: {
          email: '',
          phone: '',
          address: {
            city: '',
            state: '',
          },
        },
      },
    ],
    pagination: {},
  },
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

const defaultStore = createStore(reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  ));

const renderWithRedux = (component, { store = defaultStore } = {}) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

it('Renders using Redux without crashing', () => {
  const petsList = renderWithRedux(<PetsList />);
  expect(petsList).toBeTruthy();
});
