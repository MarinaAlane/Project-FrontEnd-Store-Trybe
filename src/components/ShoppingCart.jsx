import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.renderCartItem = this.renderCartItem.bind(this);
  }

  renderCartItem() {
    const cartItens = Object.values(localStorage).map((item) => {
      item = JSON.parse(item);
      return (
        <div key={ item.id }>
          <img src={ item.thumbnail } alt={ item.title } />
          <p data-testid="shopping-cart-product-name">{ item.title }</p>
          <p>{ item.price }</p>
          <p data-testid="shopping-cart-product-quantity">{1}</p>
        </div>
      );
    });
    return cartItens;
  }

  render() {
    if (localStorage.length === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      );
    }
    return (
      <section>
        { this.renderCartItem() }
      </section>
    );
  }
}

export default ShoppingCart;
