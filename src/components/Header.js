import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Header extends React.Component {
  async fetchProducts() {
    const response = await getProductsFromCategoryAndQuery();

    const { onChangeProducts } = this.props;
    const products = response.results;
    onChangeProducts(products);
  }

  render() {
    return (
      <header>
        <input data-testid="query-input" type="search" name="" id="" />
        <button
          type="button"
          onClick={ () => this.fetchProducts() }
          data-testid="query-button"
        >
          Buscar
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  onChangeProducts: PropTypes.func.isRequired,
};

export default Header;
