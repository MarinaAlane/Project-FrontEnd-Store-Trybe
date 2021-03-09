import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ListCategories from './ListCategories';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promisse: false,
      categories: '',
    };
    this.getCategories = this.getCategories.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderElements = this.renderElements.bind(this);
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  async getCategories() {
    const categories = await api.getCategories().then((data) => this.setState({
      categories: data,
      promisse: true,
    }));
    console.log(categories);
    return categories;
  }

  async getProducts(categoryId, query) {
    await api.getProductsFromCategoryAndQuery(categoryId, query);
  }

  renderElements() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <button type="button">
          <Link to="/cart" data-testid="shopping-cart-button">
            Cart
          </Link>
        </button>
        <div>
          <ListCategories categories={ categories } />
        </div>
      </div>
    );
  }

  render() {
    const { promisse } = this.state;
    if (promisse === true) {
      return this.renderElements();
    }
    return (
      <div>Loading...</div>
    );
  }
}

export default Home;
