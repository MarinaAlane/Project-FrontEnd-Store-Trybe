import React, { Component } from 'react';
import CartButton from './CartButton';

class SearchBar extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          name="search-bar"
          id=""
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />

      </>
    );
  }
}

export default SearchBar;
