import React from 'react';
import IfelseRendering from './Components/IfelseRendering';
import ElementRendering from './Components/ElementRendring'
import TernaryOperatorRendering from './Components/TerenaryOperatorRendering'
import ShortCircuitOperatorRendering from './Components/ShortCircuitOperatorRendering'

/**
 * Main application component.
 * Renders several sub-components to demonstrate different rendering techniques.
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div>
      <div>
        <h2>If-Else Rendering Component</h2>
        <p>This component demonstrates rendering based on if-else conditions.</p>
        <IfelseRendering />
      </div>

      <div>
        <h2>Element Rendering Component</h2>
        <p>This component demonstrates rendering elements based on conditions.</p>
        <ElementRendering />
      </div>

      <div>
        <h2>Ternary Operator Rendering Component</h2>
        <p>This component demonstrates rendering using ternary operators.</p>
        <TernaryOperatorRendering />
      </div>

      <div>
        <h2>Short Circuit Operator Rendering Component</h2>
        <p>This component demonstrates rendering using short-circuit operators.</p>
        <ShortCircuitOperatorRendering />
      </div>
    </div>
  );
}

export default App;
