import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="App">Pagina inicial</Link>
      </div>
    );
  }
}

export default ShoppingCart;
