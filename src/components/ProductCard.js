import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <img src={ product.thumbnail } alt="product" />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default ProductCard;
