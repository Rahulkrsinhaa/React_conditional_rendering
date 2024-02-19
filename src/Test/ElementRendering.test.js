import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import ElementRendering from '../Components/ElementRendring';;

describe('ElementRendering', () => {
  test('renders "You are logged in" or "Please login first" based on changing state', async () => {
    // Arrange
    render(<ElementRendering />);

    // Act & Assert
    await waitFor(() => {
      const loggedInMessage = screen.queryByText('You are logged in');
      const loginMessage = screen.queryByText('Please login first');
      
      // Ensure at least one of the messages is present
      expect(loggedInMessage || loginMessage).toBeInTheDocument();
    });
  });
});
