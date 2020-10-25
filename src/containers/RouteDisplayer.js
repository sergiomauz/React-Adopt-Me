import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PetsList from '../components/PetsList';
import PetDetails from '../components/PetDetails';

import Style from '../styles/index.module.css';

const RouteDisplayer = () => (
  <>
    <main className={Style.mainContainer}>
      <div className={Style.pageContent}>
        <Switch>
          <Route exact path="/" component={PetsList} />
          <Route exact path="/pets" component={PetsList} />
          <Route exact path="/pet/:id" component={PetDetails} />
        </Switch>
      </div>
    </main>
  </>
);

export default RouteDisplayer;
