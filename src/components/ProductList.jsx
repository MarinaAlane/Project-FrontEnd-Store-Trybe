import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
        />
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">cart</button>
        </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default ProductList;
