import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCategory extends Component {
  render() {
    const { category: { name } } = this.props;
    return (
      <p data-testid="category">{name}</p>
    );
  }
}

export default ProductCategory;

ProductCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
