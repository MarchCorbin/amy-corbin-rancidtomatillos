import React from 'react';
import {screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Movies from './Movies';
import { BrowserRouter } from 'react-router-dom';
import  { movieData, movieRatings } from '../../movieData'
import { fetchAllMovies } from '../../Api'
jest.mock('../../Api')


describe('Movie Component', () => {

  it('should have the correct content when rendered', async() => {

    fetchAllMovies.mockResolvedValueOnce(movieData)
// const { getByText } = render(<App />)
    render(<BrowserRouter><Movies userRatings={movieRatings} /></BrowserRouter>);
    const movies2 = await waitFor(() => screen.getByText("Greenland")); 
    const movies3 = await waitFor(() => screen.getByText("Archive"))
    expect(movies2).toBeInTheDocument()
  })


  it('it should render all cards', () => {
    fetchAllMovies.mockResolvedValue(movieData)

    render(<Movies />);

    const movieNum = screen.getByPlaceholderText('mov-card');
    expect(movieNum).toBeInTheDocument()
    })
})
