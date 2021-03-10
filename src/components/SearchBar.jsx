import React from 'react';
import { Link } from 'react-router-dom';
import shopCart from '../images/shopCart.png';

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <input type="text" className="search-bar" />

          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={ shopCart } alt="Imagem do carrinho de compras" className="shop-cart" />
          </Link>
        </div>

        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </>
    );
  }
}

export default SearchBar;
