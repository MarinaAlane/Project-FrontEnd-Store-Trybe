import React, { Component } from 'react';
import { bool, string, oneOfType, element } from 'prop-types';

export default class Button extends Component {
  render() {
    const { submit, id, children } = this.props;

    return (
      <button
        data-testid={ id }
        type={ submit ? 'submit' : 'button' }
        id={ id }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  submit: bool.isRequired,
  id: string.isRequired,
  children: oneOfType([string, element]),
};

Button.defaultProps = {
  children: '',
};
