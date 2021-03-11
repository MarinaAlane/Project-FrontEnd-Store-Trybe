import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/cart" data-testid="shopping-cart-button">CARRINHO</Link>
      </div>
    );
  }
}

export default ProductList;
