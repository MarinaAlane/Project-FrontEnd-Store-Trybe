import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de compras
        </Link>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default ProductList;
