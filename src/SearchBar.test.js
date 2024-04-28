import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Import your App component

test('renders search bar with placeholder text', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();
});

test('displays search term in red text below the search bar', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Search...');
  fireEvent.change(searchInput, { target: { value: 'pizza' } }); // Simulate typing "pizza"

  const displayedText = screen.getByText(/pizza/i); // Match "pizza" case-insensitively
  expect(displayedText).toBeInTheDocument();
  expect(displayedText).toHaveStyle({ color: 'red' });
});

test('displays pizza image when "pizza" is typed', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Search...');
  fireEvent.change(searchInput, { target: { value: 'pizza' } }); // Simulate typing "pizza"

  const pizzaImage = screen.getByAltText('Pizza');
  expect(pizzaImage).toBeInTheDocument();
});
