import React from 'react';
import {screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import {postLogin} from '../../Api.js'
import { BrowserRouter } from 'react-router-dom';
jest.mock('../../Api.js')


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

  it('should check the input is clear after submit', async() => {
    const setCurrentUser = jest.fn()
    render(<BrowserRouter><Login setCurrentUser={setCurrentUser}/></BrowserRouter>);
    postLogin.mockResolvedValue({"email": "rick@turing.io",
      "id": 72, "name": "Rick"})
    const emailInput = await waitFor(() =>screen.getByPlaceholderText('Username'))
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', {name: 'Submit'});
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(emailInput, {target: {name: 'email', value: 'New-Title'}})
    expect(emailInput.value).toEqual('New-Title')
    fireEvent.change(passwordInput, {target: {name: 'password', value: 'something here'}})
    expect(passwordInput.value).toEqual('something here')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(emailInput.value).toHaveLength(0)
      expect(passwordInput.value).toHaveLength(0)
    })
  })
})