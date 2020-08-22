import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  it('should have two input fields and a button', () => {
  render (<Login />);

  const emailInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByRole('button', {name: 'Submit'});

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
})

  it('should check the input is clear after submit', () => {
    render(<BrowserRouter><Login/></BrowserRouter>);

    const emailInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', {name: 'Submit'});
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(emailInput, {target: {name: 'email', value: 'New-Title'}})
    fireEvent.change(passwordInput, {target: {name: 'password', value: ''}})
    fireEvent.click(submitButton)

    expect(emailInput.value).toHaveLength(0)
    expect(passwordInput.value).toHaveLength(0)
  })
})