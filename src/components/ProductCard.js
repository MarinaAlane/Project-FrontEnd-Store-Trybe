import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link
        to={ { pathname: `/product/${product.id}`, state: { product } } }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <p>{ product.title }</p>
          <img src={ product.thumbnail } alt="product" />
          <p>{ product.price }</p>
        </div>
      </Link>
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
