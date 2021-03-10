import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h1>{ product.title }</h1>
        <img src={ product.thumbnail } alt="product" />
        <div>{product.price}</div>
      </div>
    );
  }
}

Product.propTypes = { productsList: PropTypes.object }.isRequired;

export default Product;
