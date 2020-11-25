import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders slot picker page', () => {
  render(<App />);
  const title = screen.getByText(/Slot Picker/i);
  expect(title).toBeInTheDocument();
});
