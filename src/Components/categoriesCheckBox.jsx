import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesCheckBox extends Component {
  render() {
    const { category } = this.props;
    return (
      <ul>
        <li>
          <input type="checkbox" data-testid="category" />
          { category.name }
        </li>
      </ul>
    );
  }
}
CategoriesCheckBox.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }),
}.isRequired;

export default CategoriesCheckBox;
