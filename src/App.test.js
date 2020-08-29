import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import Card from './Components/Card/Card';
import { screen, fireEvent, render, waitFor } from '@testing-library/react;
import { fetchUserMovieRatings } from './Api';
jest.mock('.../Api')
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
import movieData from './movieData'


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
