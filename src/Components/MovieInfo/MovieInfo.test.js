import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import MovieInfo from './MovieInfo';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../../Api')
import { fetchSingleMovieDetails } from '../../Api'
import { movieRatings } from '../../movieData'

describe('MovieInfo Component', () => {
  it('should have the correct content when rendered', async () => {
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
        "tagline": "",
        "average_rating": 7.142857142857143
      }
    })

    const {getByText} = render(<BrowserRouter><MovieInfo userRatings={movieRatings} {...props}/></ BrowserRouter>)
    const movieTitle = await waitFor(() => screen.getByText("Summary: A detached married couple must get their son and themselves to safety after being randomly selected to enter an underground bunker, as a massive object from space threatens to destroy the world in less than 48 hours."
    ));

    expect(movieTitle).toBeInTheDocument();
  })


  it.skip('should add a rating', () => {

  })

  it.skip('should delete a rating', () => {

    const mockRemoveIdea = jest.fn(); 

      // render(<MovieInfo {...props} />)

      const button = screen.getByRole('button');
      fireEvent.click(button)

      expect(mockRemoveIdea).toBeCalledTimes(1);
      // expect(mockRemoveIdea).toBeCalledWith(1);
  })
}) 
