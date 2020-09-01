import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import MovieInfo from './MovieInfo';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { fetchSingleMovieDetails, fetchComments, getUserFavorites, deleteSingleRating } from '../../Api'
import { movieRatings } from '../../movieData'
jest.mock('../../Api')

describe('MovieInfo Component', () => {
  it('should have the correct content when rendered', async () => {
    const props = {match: {params: {id: 524047}}}
    getUserFavorites.mockResolvedValue([524047])
    fetchSingleMovieDetails.mockResolvedValue({ 
      movie : {
        "id": 524047,
        "title": "Greenland",
        "poster_path": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
        "release_date": "2020-07-29",
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

    fetchComments.mockResolvedValue({comments: ['i am comment']})


    const {getByText} = render(<BrowserRouter><MovieInfo userRatings={movieRatings} {...props}/></ BrowserRouter>)
    const movieSynopsis = await waitFor(() => screen.getByText("Summary: A detached married couple must get their son and themselves to safety after being randomly selected to enter an underground bunker, as a massive object from space threatens to destroy the world in less than 48 hours."
    ));

    expect(movieSynopsis).toBeInTheDocument();
  })


  it('should delete a rating', async() => {
getUserFavorites.mockResolvedValue([524047])
const props = {match: {params: {id: 524047}}}
    fetchSingleMovieDetails.mockResolvedValue({ 
      movie : {
        "id": 524047,
        "title": "Greenland",
        "poster_path": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
        "release_date": "2020-07-29",
        "overview": "A detached married couple must get their son and themselves to safety after being randomly selected to enter an underground bunker, as a massive object from space threatens to destroy the world in less than 48 hours.",
        "genres": [
          "Action",
          "Science Fiction",
          "Thriller"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 119,
        "tagline": "I am tagline",
        "average_rating": 7.142857142857143
      }
    })

    fetchComments.mockResolvedValue({comments: ['i am comment']})


      render(<MemoryRouter><MovieInfo userId={72} {...props} userRatings={movieRatings} /></MemoryRouter>)

  const tagline = await waitFor(() =>screen.getByText('I am tagline'))
  expect(tagline).toBeInTheDocument()
   const deletebtn = await waitFor(() => screen.getByText('Delete your Rating'))
   expect(deletebtn).toBeInTheDocument()
   fireEvent.click(deletebtn)
   const afterMessage = await waitFor(() => screen.getByText('Your Rating: Not Yet Rated'))
   expect(afterMessage).toBeInTheDocument()
  }) 
})
