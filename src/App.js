import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import generateStore from './store';

import Top from './containers/Top';
import Bottom from './containers/Bottom';
import RouteDisplayer from './containers/RouteDisplayer';

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Top />
          <RouteDisplayer />
          <Bottom />
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
