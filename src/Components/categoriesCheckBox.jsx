import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesCheckBox extends Component {
  render() {
    const { name, id } = this.props.category;
    return (
      <li>
        <label htmlFor={name}>
          <input
            type="checkbox"
            data-testid="category"
            name="category"
            id={name}
            value={id}
          />
          {name}
        </label>
      </li>
    );
  }
}
CategoriesCheckBox.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
}.isRequired;

export default CategoriesCheckBox;
