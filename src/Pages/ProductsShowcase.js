import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoriesList from '../components/CategoriesList';
import ProductList from './ProductList';

class ProductsShowcase extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesArray: [],
    };
  }

  componentDidMount() {
    return api.getCategories().then((categories) => (
      this.setState({ categoriesArray: categories })
    ));
  }

  render() {
    const { categoriesArray } = this.state;
    return (
      <div>
        <ProductList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList
          categoriesArray={ categoriesArray }
        />
      </div>
    );
  }
}

export default ProductsShowcase;
