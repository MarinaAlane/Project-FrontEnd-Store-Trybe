import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';
import CartIcon from '../images/carrinho.png';
import './Header.css';

class Header extends React.Component {
  render() {
    const { getProductsFromQuery, getInputValue } = this.props;
    return (
      <header className="header">
        <Search
          getProductsFromQuery={ getProductsFromQuery }
          getInputValue={ getInputValue }
        />
        <Link data-testid="shopping-cart-button" to="/cartPage">
          <img src={ CartIcon } alt="cart" />
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  getProductsFromQuery: PropTypes.func.isRequired,
  getInputValue: PropTypes.func.isRequired,
};

export default Header;
