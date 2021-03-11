import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';


export default class ProductPage extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className = "product-item" data-testid="product">
        <h2>{product.title}</h2>
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

export default ProductPage;