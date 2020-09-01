import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import Favorites from './Favorites.js'
import { BrowserRouter } from 'react-router-dom'
import { movieRatings, movieData } from '../../movieData'
import { getUserFavorites, fetchAllMovies } from '../../Api'


jest.mock('../../Api.js')

describe('Favorites', () => {
  it('should render all of the users current favorites', async() => {

    getUserFavorites.mockResolvedValue([524047, 606234, 234234])

    fetchAllMovies.mockResolvedValue(movieData)

    render(<BrowserRouter><Favorites userRatings={movieRatings} /></BrowserRouter>)

    const title1 = await waitFor(() =>screen.getByText('Greenland'))
    const title2 = await waitFor(() => screen.getByText('Archive'))

    expect(title1).toBeInTheDocument()
    expect(title2).toBeInTheDocument()

  })

  
})