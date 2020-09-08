import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Table from '../components/Table';

test('renders', () => {
  const history = createMemoryHistory();
  const { debug } = render(
    <Router history={history}>
      <Table />
    </Router>
  );
  debug();
});
