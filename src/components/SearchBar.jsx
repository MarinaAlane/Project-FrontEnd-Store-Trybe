import React, { Component } from 'react';

import { getProductsFromCategoryAndQuery } from '../services/api';
import ItemCard from '../components/ItemCard';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      result: [],
    };

    this.searchProducts = this.searchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async searchProducts() {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery('', searchText);
    const searchedItem = result.results;
    this.setState({
      result: searchedItem,
    });
  }

  render() {
    const { searchText, result } = this.state;
    return (
      <>
        <form action="">
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ this.handleChange }
            id=""
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.searchProducts }
          >
            Pesquisar!
          </button>
        </form>
        {result.map(({ id, title, thumbnail, price }) => (
          <ItemCard key={ id } title={ title } thumbnail={ thumbnail } price={ price } />
        ))}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default SearchBar;
