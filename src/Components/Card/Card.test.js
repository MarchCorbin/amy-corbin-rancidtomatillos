import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Card from './Card.js'
import { BrowserRouter } from 'react-router-dom'

describe('Card Component', () => {
  it('should render a title and an image', () => {
const movie1 = {
  "movieId": 524047,
  "moviePoster": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
  "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
  "movieTitle": "Greenland",
  "movieRating": 6.571428571428571,
  "releaseDate": "2020-07-29"
}
render(<BrowserRouter><Card 
  movieId= {524047}
  moviePoster= "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg"
  backdrop= "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg"
  movieTitle= "Greenland"
  movieRating= {6.571428571428571}
  releaseDate= "2020-07-29"
  /></BrowserRouter>)
  const title = screen.getByText('Greenland')
  const poster = screen.getByRole('img')
  expect(title).toBeInTheDocument()
  expect(poster).toBeInTheDocument()
  })
})