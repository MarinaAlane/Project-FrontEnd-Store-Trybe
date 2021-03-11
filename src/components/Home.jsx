import React from 'react';
import { Link } from 'react-router-dom';
import ListOfCategories from './ListOfCategories';
import SearchBar from './SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
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
