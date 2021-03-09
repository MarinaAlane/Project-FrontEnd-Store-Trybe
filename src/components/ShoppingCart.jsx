import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default ShoppingCart;
