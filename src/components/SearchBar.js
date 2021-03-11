import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonSearch from './ButtonSearch';
import InputSearch from './InputSearch';
import ButtonShoppingCart from './ButtonShoppingCart';

class SearchBar extends Component {
  render() {
    const { onChange, onClick } = this.props;
    return (
      <div>
        <InputSearch onChange={ onChange } />
        <ButtonSearch onClick={ onClick } />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <ButtonShoppingCart />
        </Link>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
