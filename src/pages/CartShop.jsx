import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class CartShop extends React.Component {
  render() {
    return (
      <main>
        <FiShoppingCart />
        <h1>Carrinho de compras</h1>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        <Link to="/">Continuar comprando</Link>
      </main>
    );
  }
}
