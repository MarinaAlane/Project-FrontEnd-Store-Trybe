import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-input">
          <input type="text" name="search-input" placeholder="Buscar" />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

export default ProductList;
