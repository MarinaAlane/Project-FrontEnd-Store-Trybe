import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from './ButtonShoppingCart';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProducts(categoryId, query) {
    const response = await getProductsFromCategoryAndQuery(categoryId, query);

    const { onChangeProducts } = this.props;
    const products = response.results;
    onChangeProducts(products);
  }

  searchButton() {
    const { searchValue } = this.state;
    return (
      <button
        type="button"
        onClick={ () => this.fetchProducts('', searchValue) }
        data-testid="query-button"
      >
        Buscar
      </button>
    );
  }

  render() {
    const { showInput } = this.props;
    const { showSearchButton } = this.props;
    const { searchValue } = this.state;
    return (
      <header className="header">
        {
          showInput
          && <input
            data-testid="query-input"
            type="search"
            name="searchValue"
            id=""
            className="input-search"
            value={ searchValue }
            onChange={ this.handleChange }
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
