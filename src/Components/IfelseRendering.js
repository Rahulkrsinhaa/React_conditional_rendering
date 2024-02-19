import React, { Component } from 'react';

/**
 * Component demonstrating rendering based on if-else condition.
 * Renders a message based on the user's authentication status.
 */
export default class IfelseRendering extends Component {
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
     * Renders a message based on the user's authentication status.
     * @returns {JSX.Element} Message indicating whether the user is logged in or not.
     */
    render() {
        if (this.state.isLoggedIn) {
            return <h1>You are logged in</h1>;
        } else {
            return <h1>Please login first</h1>;
        }
    }
}
