import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryInput extends Component {
  render() {
    const { name, id } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          type="radio"
          name="category"
          value={ id }
          data-testid="category"
        />
        { name }
      </label>
    );
  }
}

CategoryInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoryInput;
