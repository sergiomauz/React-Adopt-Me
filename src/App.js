import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import generateStore from './store';
import FilterParams from './components/FilterParams';
import PetsList from './components/PetsList';

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <header>
            Adopt Me! :D
          </header>
          <FilterParams />
          <div className="container">
            <Switch>
              <Route exact path="/" component={PetsList} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
