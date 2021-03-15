import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from './ButtonShoppingCart';

class Header extends React.Component {
  async fetchProducts() {
    const response = await getProductsFromCategoryAndQuery();

    const { onChangeProducts } = this.props;
    const products = response.results;
    onChangeProducts(products);
  }

  searchButton() {
    return (
      <button
        type="button"
        onClick={ () => this.fetchProducts() }
        data-testid="query-button"
      >
        Buscar
      </button>
    );
  }

  render() {
    const { showInput } = this.props;
    const { showSearchButton } = this.props;
    return (
      <header className="header">
        {
          showInput
          && <input
            data-testid="query-input"
            type="search"
            name=""
            id=""
            className="input-search"
          />
        }
        {
          showSearchButton
          && this.searchButton()
        }
        <ButtonShoppingCart />
      </header>
    );
  }
}

Header.propTypes = {
  onChangeProducts: PropTypes.func.isRequired,
  showInput: PropTypes.bool.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
};

export default Header;
