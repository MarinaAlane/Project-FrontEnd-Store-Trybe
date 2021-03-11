import React, { Component } from 'react';
import CardShoppingCart from '../Components/CardShoppingCart/CardShoppingCart';
import Cart from '../services/Data';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      item: Cart,
    };
  }

  render() {
    const { item } = this.state;
    if (item.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    }
    return (
      <div>
        <ul>
          { item
            .map((product) => (
              <CardShoppingCart product={ product } key={ product.id } />
            )) }
        </ul>
      </div>
    );
  }
}
