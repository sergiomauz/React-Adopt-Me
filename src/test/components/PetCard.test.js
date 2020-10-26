import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import PetCard from '../../components/PetCard';

afterEach(cleanup);

const defaultPet = {
  id: 147852369,
  photos: [],
  name: 'Chewbaca',
};

const composeEnhancers = compose;

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PET_INFO':
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

it('Renders using Redux without crashing', () => {
  const petCard = renderWithRedux(<PetCard key={defaultPet.id} info={defaultPet} />);
  expect(petCard).toBeTruthy();
});
