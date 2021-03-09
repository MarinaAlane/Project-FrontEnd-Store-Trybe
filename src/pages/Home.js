import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.setSearchText = this.setSearchText.bind(this);
    this.searchProducts = this.searchProducts.bind(this);

    this.state = {
      searchText: '',
      productList: [],
    };
  }

  setSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  async searchProducts() {
    const { searchText } = this.state;
    const text = searchText;
    const response = await api.getProductsFromCategoryAndQuery('', text);
    const list = await response.results;
    this.setState({ productList: list });
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.setSearchText }
        />
        <button type="button" onClick={ this.searchProducts } data-testid="query-button">
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {productList
          .map((product) => (
            <ProductCard product={ product } key={ product.id } />
          ))}
      </div>
    );
  }
}
