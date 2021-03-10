import React from 'react';
import * as api from '../services/api';
import ListCategories from './ListCategories';
import RenderElements from './RenderElements';
import ProductList from './ProductList';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promisse: false,
      categories: '',
      query: '',
      products: [],
    };
    this.getCategories = this.getCategories.bind(this);
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

  async getCategories() {
    const categories = await api.getCategories().then((data) => this.setState({
      categories: data,
      promisse: true,
    }));
    return categories;

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
    const { promisse, categories } = this.state;
    if (promisse === true) {
      return (
        <div>
          <RenderElements />
          <div>
            <ListCategories categories={ categories } />
          </div>
        </div>
      );
    }
    return (
      <RenderElements />
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
