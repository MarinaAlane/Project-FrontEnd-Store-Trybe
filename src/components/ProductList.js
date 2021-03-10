import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <input 
          type="text"
        />
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button">cart</button>
        </Link>
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default ProductList;
