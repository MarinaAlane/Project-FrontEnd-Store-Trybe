import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from './ProductList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleClick() {
    const { query } = this.state;
    const selectedProducts = await this.getProducts({ query });
    this.setState({
      products: selectedProducts.results,
    });
  }

  handleInputChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async getProducts({ categoryId, query }) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    return products;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleInputChange }
        />
        <button type="button" data-testid="query-button" onClick={ this.handleClick }>
          PESQUISAR
        </button>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <ProductList products={ products } />
        <button type="button">
          <Link to="/cart" data-testid="shopping-cart-button">
            Cart
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
