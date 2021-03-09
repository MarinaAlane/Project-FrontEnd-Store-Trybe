import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getCategories = this.getCategories.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  async getCategories() {
    await api.getCategories();
  }

  async getProducts(categoryId, query) {
    await api.getProductsFromCategoryAndQuery(categoryId, query);
  }

  render() {
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
      </div>
    );
  }
}

export default Home;
