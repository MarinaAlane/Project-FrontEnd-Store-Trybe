import React from 'react';
import { Link } from 'react-router-dom';
import ListOfCategories from './ListOfCategories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <ListOfCategories />

        <button type="button">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
          Carrinho
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
