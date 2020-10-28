import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import generateStore from './store';

import Top from './components/Top';
import Bottom from './components/Bottom';
import RouteDisplayer from './components/RouteDisplayer';

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
