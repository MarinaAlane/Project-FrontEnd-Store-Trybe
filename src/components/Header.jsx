import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';
import CartIcon from '../images/carrinho.png';

class Header extends React.Component {
  render() {
    const { getProductsFromQuery } = this.props;
    return (
      <header>
        <Search getProductsFromQuery={ getProductsFromQuery } />
        <Link data-testid="shopping-cart-button" to="/cartPage">
          <img src={ CartIcon } alt="cart" />
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  getProductsFromQuery: PropTypes.func.isRequired,
};

export default Header;
