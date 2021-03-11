import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class CartShop extends React.Component {
  render() {
    return (
      <main>
        <FiShoppingCart data-testid="shopping-cart-button" />
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Continuar comprando</Link>
        </div>
      </main>
    );
  }
}
