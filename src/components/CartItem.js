import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./CartItem.css');

export default class CartItem extends Component {
  render() {
    const { item: { title, thumbnail, quantity } } = this.props;
    return (
      <article className="CartItem__Container">
        <div><img src={ thumbnail } alt={ title } /></div>
        <div data-testid="shopping-cart-product-name">{ title }</div>
        <div data-testid="shopping-cart-product-quantity">{ quantity }</div>
      </article>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    availableQuantity: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};
