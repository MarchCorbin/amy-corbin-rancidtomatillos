import React from 'react';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieInfo from './MovieInfo';
import { BrowserRouter } from 'react-router-dom';
import { fetchSingleMovieDetails } from '../../Api.js'
jest.mock('../../Api.js')


describe('MovieInfo Component', () => {
  it('should have the correct content when rendered', async() => {
  const props = {match: {params: {id: 524047}}}
fetchSingleMovieDetails.mockResolvedValue( {
   movie: {
     "id": 524047,
    //  "title": "Greenland",
    //  "poster_path": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
    //  "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
    //  "release_date": "2020-07-29",
     "overview": "A detached married couple must get their son and themselves to safety after being randomly selected to enter an underground bunker, as a massive object from space threatens to destroy the world in less than 48 hours.",
     "genres": [
       "Action",
       "Science Fiction",
       "Thriller"
     ],
     "budget": 0,
     "revenue": 0,
     "runtime": 119,
     "tagline": "",
     "average_rating": 7.142857142857143
   }
 })


  render(<BrowserRouter><MovieInfo {...props}  /></ BrowserRouter>)
    const movieTitle = await waitFor(() => screen.getByText("A detached married couple"))
    expect(movieTitle).toBeInTheDocument()
  })
})