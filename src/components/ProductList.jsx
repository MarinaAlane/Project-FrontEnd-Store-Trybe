import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.emptySearch = this.emptySearch.bind(this);
    this.productMap = this.productMap.bind(this);
    this.state = {
      productId: '',
      productQuery: '',
    };
  }

  async handleClick(id) {
    await this.setState({
      productId: id,
    });
    this.buttonClick();
  }

  handleChange({ target }) {
    this.setState({
      productQuery: target.value,
    });
  }

  async buttonClick() {
    const { productId, productQuery } = this.state;
    const promise = await api.getProductsFromCategoryAndQuery(productId, productQuery);
    this.setState({
      results: promise.results,
    });
  }

  emptySearch() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }

  productMap() {
    const { results } = this.state;
    return (
      <div>
        { results.map(({ title, thumbnail, price, id }) => (<ProductCard
          title={ title }
          image={ thumbnail }
          key={ id }
          price={ price }
        />)) }
      </div>
    );
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="search-input">
            <input
              data-testid="query-input"
              type="text"
              name="search-input"
              placeholder="Buscar"
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.buttonClick }
          >
            Buscar
          </button>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">Carrinho</Link>
          <Categories handleClick={ this.handleClick } />
          { !results ? this.emptySearch() : this.productMap() }
        </div>
      </div>
    );
  }
}

export default ProductList;
