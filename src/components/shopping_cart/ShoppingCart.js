import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from './logo_arrow_back.svg';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/App">
          <img src={ ArrowBack } alt="logo arrow back" />
        </Link>
        <span>Carrinho de Compras</span>
        <p
          data-testid="shopping-cart-empty-message"
          className="message"
        >
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}
export default ShoppingCart;
