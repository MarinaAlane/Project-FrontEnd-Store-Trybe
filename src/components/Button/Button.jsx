import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { type, id } = this.props;

    return (
      <button
        data-testid={ id }
        type={ type }
        id={ id }
      >
        { innerText }
      </button>
    );
  }
}
