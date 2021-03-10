import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="search-bar" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <button type="button">
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </button>
      </div>
    );
  }
}

export default SearchBar;
