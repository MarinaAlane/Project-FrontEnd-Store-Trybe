import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="search-bar" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <button type="button">
          <a href="/ShopCart" data-testid="shopping-cart-button">
            Carrinho de compras
          </a>
        </button>
      </div>
    );
  }
}

export default SearchBar;
