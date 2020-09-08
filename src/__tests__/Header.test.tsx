import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from '../components/Header';

test('renders', () => {
  const history = createMemoryHistory();
  const { debug } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  debug();
});
