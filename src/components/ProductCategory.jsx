import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCategory extends Component {
  render() {
    const { category: { name } } = this.props;
    return (
      <div className="category">
        <label htmlFor="category">
          <input type="radio" name="category" id="category" data-testid="category" />
          { name }
        </label>
      </div>
    );
  }
}

ProductCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default ProductCategory;

