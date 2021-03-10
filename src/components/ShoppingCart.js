import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCart from './ItemCart';

class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    if (cartItems.length < 1) {
      return (
        <h3
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h3>
      );
    }
    return (
      <div>
        {cartItems.map((item) => <ItemCart key={ item.id } item={ item } />)}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(),
}.isRequired;

export default ShoppingCart;
