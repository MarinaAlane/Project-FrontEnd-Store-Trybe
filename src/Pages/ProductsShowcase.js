import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSearch from '../components/ButtonSearch';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import InputSearch from '../components/InputSearch';

class ProductsShowcase extends React.Component {
  render() {
    return (
      <div>
        <InputSearch />
        <ButtonSearch />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <ButtonShoppingCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductsShowcase;
