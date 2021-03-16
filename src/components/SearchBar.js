import React, { Component } from 'react';
import * as api from '../services/api';
import Product from './Product';
import CategoriesList from './CategoriesList';
import ShoppingCartButton from './ShoppingCartButton';
import '../styles/SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerQueryByCategory = this.handlerQueryByCategory.bind(this);

    this.state = {
      query: '',
      products: [],
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('itens')) localStorage.setItem('itens', JSON.stringify([]));
  }

  handlerChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  async handlerClick() {
    const { query } = this.state;
    const fechProducts = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({
      products: fechProducts.results,
    });
  }

  async handlerQueryByCategory(categoryId) {
    const fetchProducts = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      products: fetchProducts.results,
    });
  }

  showProducts() {
    const { products } = this.state;
    return (
      products.map((product) => <Product key={ product.id } product={ product } />)
    );
  }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <section className="container-search-bar">
          <input
            placeholder="Buscar produtos, marcas e muito mais…"
            className="input-search-bar"
            type="text"
            data-testid="query-input"
            value={ query }
            onChange={ this.handlerChange }
          />
          <button
            className="button-search-bar"
            type="button"
            data-testid="query-button"
            onClick={ this.handlerClick }
          >
            Search
          </button>
        </section>
        { products.length !== 0
          ? this.showProducts()
          : (
            <p data-testid="home-initial-message" className="message-search">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        <ShoppingCartButton />
        <CategoriesList handlerQueryByCategory={ this.handlerQueryByCategory } />
      </div>
    );
  }
}
