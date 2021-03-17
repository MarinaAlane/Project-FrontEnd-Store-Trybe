import React from 'react';
import { Link } from 'react-router-dom';
import goBack from '../images/voltar.png';

class CartPage extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={ goBack } alt="goBack-icon" />
        </Link>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </header>
    );
  }
}

export default CartPage;
