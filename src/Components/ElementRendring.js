import React, { Component } from 'react';


/**
 * Component demonstrating element rendering based on user authentication status.
 * Renders a message based on whether the user is logged in or not.
 */
export default class ElementRendering extends Component {
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
    let isLogged;

    // Conditional rendering based on the user's authentication status
    if (this.state.isLoggedIn) {
      isLogged = <h1>You are logged in</h1>;
    } else {
      isLogged = <h1>Please login first</h1>;
    }
    
    return isLogged;
  }
}
