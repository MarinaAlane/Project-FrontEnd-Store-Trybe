import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProduct extends Component {
 
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

CardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  })
}.isRequired;
