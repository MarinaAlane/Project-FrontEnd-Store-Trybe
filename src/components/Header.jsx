import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import CartIcon from '../images/carrinho.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Search />
        <Link data-testid="shopping-cart-button" to="/cartPage">
          <img src={ CartIcon } alt="cart" />
        </Link>
      </header>
    );
  }
}

export default Header;
