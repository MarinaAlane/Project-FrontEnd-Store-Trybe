import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

import FilterCategories from '../components/FilterCategories';
import CartButton from '../components/CartButton';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      result: [],
    };
    this.addCategoryAndSearch = this.addCategoryAndSearch.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addCategoryAndSearch(event) {
    const { id } = event.target;
    this.searchProducts(id);
  }

  async searchProducts(categoryId = '') {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery(categoryId, searchText);
    const searchedItem = result.results;
    this.setState({
      result: searchedItem,
    });
  }

  render() {
    const { result, searchText } = this.state;
    return (
      <main>
        <div className="search-area">
          <SearchBar
            search={ this.searchProducts }
            textChange={ this.handleChange }
            searchText={ searchText }
          />
          <CartButton />
        </div>
        <section className="search--results">
          <FilterCategories filter={ this.addCategoryAndSearch } />
          <SearchResult result={ result } />
        </section>
      </main>
    );
  }
}

export default HomePage;
