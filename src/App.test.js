import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import Card from './Components/Card/Card';
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import { fetchUserMovieRatings } from './Api';
import { BrowserRouter } from 'react-router-dom'



describe('App' , () => {
  it('should render a header', () => {

    render(<BrowserRouter><App /></BrowserRouter>)

    const headText = screen.getByText('Perished Durians')
    expect(headText).toBeInTheDocument()
  })

  it('should have a login button', () => {
    render(<BrowserRouter><App /></BrowserRouter>)

    const loginButton = screen.getByRole('button')
    expect(loginButton).toBeInTheDocument()
  })
})
