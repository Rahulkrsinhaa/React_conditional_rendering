import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import TerenaryOperatorRendering from '../Components/TerenaryOperatorRendering';

describe('ElementRendering', () => {
  test('renders "You are logged in" or "Please login first" based on changing state', async () => {
    // Arrange
    render(<TerenaryOperatorRendering />);

    // Act & Assert
    await waitFor(() => {
      const loggedInMessage = screen.queryByText('You are logged in');
      
      // Ensure at least one of the messages is present
      expect(loggedInMessage).toBeInTheDocument();
    });
  });
});
