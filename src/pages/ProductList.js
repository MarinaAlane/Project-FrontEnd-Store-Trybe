import React, { Component } from 'react';
import CartProductList from './CartProductList';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <CartProductList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
