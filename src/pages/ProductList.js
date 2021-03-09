import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <main>
        <nav>
          <input type="text" />
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </nav>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default ProductList;
