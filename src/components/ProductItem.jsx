import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-item" data-testid="product">
        <h4>{product.title}</h4>
        <img alt={ `${product.title}` } src={ product.thumbnail } />
        <i>{ product.price }</i>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
