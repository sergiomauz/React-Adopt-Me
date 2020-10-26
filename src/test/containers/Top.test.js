import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Top from '../../containers/Top';

afterEach(cleanup);

it('Renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <BrowserRouter>
      <Top />
    </BrowserRouter>,
    div,
  );
});
