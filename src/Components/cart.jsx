import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
import dataCart from '../services/dataCart';

class Cart extends Component {
  render() {
    return (
      <div>
        {dataCart.length < 1
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : dataCart.map((card, index) => (
            <CartItem card={ card } key={ index } index={ index } />
          ))}
        <button type="button">
          <Link to="/checkout" data-testid="checkout-products">
            checkout
          </Link>
        </button>
      </div>
    );
  }
}

export default Cart;
