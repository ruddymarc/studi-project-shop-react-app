import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Articles en vente ici/i);
  expect(linkElement).toBeInTheDocument();
});
