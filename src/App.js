import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import generateStore from './store';
import PetsList from './components/PetsList';
import PetDetails from './components/PetDetails';

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <header>
            Adopt Me! :D
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={PetsList} />
              <Route exact path="/pets" component={PetsList} />
              <Route exact path="/pet/:id" component={PetDetails} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
