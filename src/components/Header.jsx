import React from 'react';
import ShoppingCartButton from './shoppingCartButton';

class Header extends React.Component {
  render() {
    return (
      <header>
        <label htmlFor="search" data-testid="home-initial-message">
          <input type="text" id="search" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <ShoppingCartButton />
      </header>
    );
  }
}

export default Header;
