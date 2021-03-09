import React from 'react';
import * as api from '../services/api';

import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: '',
      products: '',
    }
    this.getCategories = this.getCategories.bind(this);
    this.getProductsFromCategoryAndQuery = this.getProductsFromCategoryAndQuery.bind(this);
    
  }

  componentDidMount() {
    this.getCategories();
    this.getProductsFromCategoryAndQuery();
  }

  async getCategories() {
    await api.getCategories();
  }

  async getProductsFromCategoryAndQuery(categoryId, query) {
    await api.getProductsFromCategoryAndQuery(categoryId, query);
  }
 
  render() { 
    return (
      <div>
        <input type="text" />
        <h4 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h4>
        <button><Link to="/cart" data-testid="shopping-cart-button">Cart</Link></button>
      </div>
    );
  }
}
 
export default Home;