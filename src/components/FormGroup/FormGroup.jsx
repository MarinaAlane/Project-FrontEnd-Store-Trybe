import React, { Component } from 'react';
import { bool, string } from 'prop-types';

export default class FormGroup extends Component {
  render() {
    const { dataTestId, label, type, id } = this.props;

    return (
      <label
        htmlFor={ id }
      >
        { label }
        {
          type === 'textarea'
            ? (
              <textarea
                data-testid={ dataTestId ? id : '' }
                type={ type }
                id={ id }
                rows="4"
                cols="50"
              />
            )
            : (
              <input
                data-testid={ dataTestId ? id : '' }
                type={ type }
                id={ id }
              />
            )
        }
      </label>
    );
  }
}

FormGroup.propTypes = {
  dataTestId: bool.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  id: string.isRequired,
};
