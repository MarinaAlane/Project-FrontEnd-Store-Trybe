import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <div className="cart-header-container">
          <Link to="/">
            <button type="button" alt="return-button" />
          </Link>
        </div>
        <div
          className="empty-message-container"
          data-testid="shopping-cart-empty-message"
        >
          <img src="/images/icons8-empty-box-100.png" alt="Empty Box" />
          <span>Seu carrinho está vazio</span>
        </div>
      </>
    );
  }
}

export default ShoppingCart;
