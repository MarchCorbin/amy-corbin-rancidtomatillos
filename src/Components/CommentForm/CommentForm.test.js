import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
jest.mock('../../Api')
import { addComment } from '../../Api'
import CommentForm from './CommentForm';


describe('Comment Component', () => {
  it('should have two inputs and button', async() => {
    render (<CommentForm />);

    const nameInput = await waitFor(() => screen.getByPlaceholderText("name"));
    const commentInput = await waitFor(() => screen.getByPlaceholderText("comment"));
    const newComment = screen.getByRole('button', {name: "New Comment"})

    expect(nameInput).toBeInTheDocument();
    expect(commentInput).toBeInTheDocument();
    expect(newComment).toBeInTheDocument();

  })
})
