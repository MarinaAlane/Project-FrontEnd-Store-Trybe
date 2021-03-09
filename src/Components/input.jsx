import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Input = () => (
  <div>
    <input />
    <Link
      to="/emptyCart"
      data-testid="shopping-cart-button"
    >
      <FontAwesomeIcon icon={ faShoppingCart } />
    </Link>
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  </div>
);

export default Input;
