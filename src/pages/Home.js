import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard/ProductCard';
import * as api from '../services/api';
import Categories from '../Components/Categories/Categories';

export default class Home extends Component {
  constructor(state) {
    super(state);

    this.setSearchText = this.setSearchText.bind(this);
    this.handleCategory = this.handleCategory.bind(this);

    this.state = {
      searchText: '',
      productList: [],
    };
  }

  async handleCategory({ target }) {
    const { searchText } = this.state;
    await api.getProductsFromCategoryAndQuery(target.value, searchText)
      .then((response) => {
        const list = response.results;
        this.setState({ productList: list });
      });
  }

  setSearchText({ target }) {
    this.setState({ searchText: target.value });
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
        <button type="button" onClick={ this.handleCategory } data-testid="query-button">
          Pesquisar
        </button>
        <button type="button">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
        </button>
        <div className="left-side">
          <Categories handleCategory={ this.handleCategory } />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          {productList
            .map((product) => (
              <ProductCard key={ product.id } product={ product } />
            ))}
        </ul>
      </div>
    );
  }
}
