import React, { Component } from 'react';

/**
 * Component demonstrating rendering using short-circuit operators.
 * Renders a message if the user is logged in.
 */
export default class ShortCircuitOperatorRendering extends Component {
    constructor(props) {
        super(props);
      
        // Initial state
        this.state = {
           isLoggedIn: true // Assuming the user is logged in initially
        };

           // Change the state every 2 seconds
           setInterval(() => {
            this.setState(prevState => ({
                isLoggedIn: !prevState.isLoggedIn
            }));
        }, 2000);
    }
  
    /**
     * Renders a message if the user is logged in using short-circuit operators.
     * @returns {JSX.Element} Message indicating that the user is logged in.
     */
    render() {
        return this.state.isLoggedIn && <h1>You are logged in</h1>;
    }
}
