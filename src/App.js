import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import generateStore from './store';

import PetsList from './components/PetsList';
import PetDetails from './components/PetDetails';

import Top from './containers/Top';
import Bottom from './containers/Bottom';

import Style from './index.module.css';

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Top />
          <div className={Style.container}>
            <Switch>
              <Route exact path="/" component={PetsList} />
              <Route exact path="/pets" component={PetsList} />
              <Route exact path="/pet/:id" component={PetDetails} />
            </Switch>
          </div>
          <Bottom />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
