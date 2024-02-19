import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';;

describe('App', () => {
  test('renders all child components correctly', () => {
    // Arrange
    render(<App />);
    
    // Act & Assert
    // Check if each child component is rendered
    const ifElseRenderingComponent = screen.getByText('If-Else Rendering Component');
    const elementRenderingComponent = screen.getByText('Element Rendering Component');
    const ternaryOperatorRenderingComponent = screen.getByText('Ternary Operator Rendering Component');
    const shortCircuitOperatorRenderingComponent = screen.getByText('Short Circuit Operator Rendering Component');
    
    // Ensure each child component's content is present
    expect(ifElseRenderingComponent).toBeInTheDocument();
    expect(elementRenderingComponent).toBeInTheDocument();
    expect(ternaryOperatorRenderingComponent).toBeInTheDocument();
    expect(shortCircuitOperatorRenderingComponent).toBeInTheDocument();

  });
});
