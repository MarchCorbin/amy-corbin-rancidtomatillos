import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Header from './Header.js'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
  it('should greet the user', () => {
    render(<BrowserRouter><Header changingMessage='Welcome Samuel' /></BrowserRouter>)

    const greeting = screen.getByText('Welcome Samuel')
    const title = screen.getByText('Perished Durians')

    expect(greeting).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
