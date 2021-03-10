import React from 'react';
import { Link } from 'react-router-dom';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import CategoriesList from '../components/CategoriesList';
import * as api from '../services/api';

class ProductsShowcase extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesArray: '',
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
        <input />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <ButtonShoppingCart />
        </Link>
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
