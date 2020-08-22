import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Movies from './Movies';

describe('Movie Component', () => {
  it('should have the correct content when rendered', () => {

  const movies = [
    {
      movieTitle: "booo",
      movieId: 1,
      moviePoster: "string",
      movieRating: 1,
      releaseDate: "1",
      backdrop: "img"
    },
    {
      movieTitle: "mooo",
      movieId: 2,
      moviePoster: "string",
      movieRating: 2,
      releaseDate: "2",
      backdrop: "img"
    }
  ]

  render(<Movies
    movies={movies}
    />
    )
    const movies1 = screen.getByPlaceholderText('mov-card')
    const movies2 = screen.getByPlaceholderText('mov-card')
    expect(movies1).toBeInTheDocument()
    debugger
    expect(movies2).toBeInTheDocument()
  })
})
