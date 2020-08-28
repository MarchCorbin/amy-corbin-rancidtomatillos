import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieInfo from './MovieInfo';
import { BrowserRouter } from 'react-router-dom';


describe('MovieInfo Component', () => {
  it('should have the correct content when rendered', () => {
  const props = {match: {params: {id: 1}}}
  const movie = {
      id: 1,
      title: "booo",
      poster_path: "string",
      backdrop_path: "string",
      release_date: "1",
      backdrop: "img",
      release_date: ""
    }

  render(<BrowserRouter><MovieInfo {...props} movie={movie}/></ BrowserRouter>)
  const movieTitle = screen.getByTestId("movie-title");
  expect(movieTitle).toBeInTheDocument();
  })
})