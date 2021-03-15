import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CartItem.css';

class CartItem extends Component {
  render() {
    const { product } = this.props;
    const { item, quant } = product;
    const { thumbnail, title, price } = item;
    return (
      <div className="cart-item">
        <img src={ thumbnail } alt={ `${title}` } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">{ quant }</p>
        <p>{ `R$ ${(price * quant).toFixed(2)}` }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    item: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
    quant: PropTypes.number,
  }).isRequired,
};

export default CartItem;
