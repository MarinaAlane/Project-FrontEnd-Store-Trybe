import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

export default class CartProductList extends React.Component {
  render() {
    return (
      <header>
        <input type="text" name="searchItens" />
        <FiShoppingCart />
      </header>
    );
  }
}
