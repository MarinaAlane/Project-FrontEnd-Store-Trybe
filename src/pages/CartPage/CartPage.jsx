import React, { Component } from 'react';
import CartProducts from '../Cartproducts';

export default class CartPage extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <CartProducts />
      </div>
    );
  }
}
