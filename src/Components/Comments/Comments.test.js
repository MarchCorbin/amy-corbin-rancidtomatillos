import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
jest.mock('../../Api')
import Comments from './Comments';

describe('Comments Component', () => {
  it('should render comments on the page', async () => {
    const bestComments = 
      [
        {
          "comment": "YAY",
          "author": "Rick",
          "id": 1599000034492,
          "movieId": 149
        }
      ]
    render(<Comments comments={bestComments}/>)
    const comment = await waitFor(() => screen.getByText('Rick', { exact: false }))
    expect(comment).toBeInTheDocument()
  })
})