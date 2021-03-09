import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">CARRINHO</Link>
      </div>
    );
  }
}

export default SearchBar;
