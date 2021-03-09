import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

import shoppingCartIcon from '../images/shopping_cart_black.svg';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartIcon } alt="Icone do Carrinho de Compras" />
        </Link>
        <Categories />
      </div>
    );
  }
}

export default MainPage;
