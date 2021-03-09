import React, { Component } from 'react';

class Button extends Component {

  render() {
    const { activateButton } = this.props;
    return (
      <button onClick={ activateButton } type="button">lupa</button>
    );
  }
}

export default Button;
