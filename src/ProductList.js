import React, { Component } from 'react';
import ButtonCart from './components/shopping_cart/ButtonCart';
import AsideCategoriesList from './components/AsideCategoriesList';
import QueryButton from './components/QueryButton';

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        <input type="text" className="search-bar" data-testid="query-input"/>
        <QueryButton />
        <ButtonCart />
        <AsideCategoriesList />
        <p data-testid="home-initial-message" className="product-list-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductList;
