import { render, screen } from '@testing-library/react';
import App from './App';

test('renders collaborators names', () => {
  render(<App />);
  const linkElement = screen.getByText(/Made by Andrew Orlov, Joshua Chelen, Gael Lucero-Palacios/i);
  expect(linkElement).toBeInTheDocument();
});
