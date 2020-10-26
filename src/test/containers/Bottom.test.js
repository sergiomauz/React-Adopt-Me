import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Bottom from '../../containers/Bottom';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <BrowserRouter>
      <Bottom />
    </BrowserRouter>,
    div,
  );
});
