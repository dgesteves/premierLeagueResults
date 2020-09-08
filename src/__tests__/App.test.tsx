import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';

test('renders', () => {
  const { debug, getByText } = render(<App />);
  const appTitle = getByText('PREMIER LEAGUE RESULTS');
  const tableLink = getByText('TABLE');
  const weeksLink = getByText('WEEKS');

  expect(appTitle).toBeInTheDocument();
  expect(tableLink).toBeInTheDocument();
  expect(weeksLink).toBeInTheDocument();

  fireEvent.click(tableLink);

  debug();
});
