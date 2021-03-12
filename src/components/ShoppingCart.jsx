import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.renderCartItem = this.renderCartItem.bind(this);
    this.increaseQuant = this.increaseQuant.bind(this);
    this.decreaseOrDelete = this.decreaseOrDelete.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  increaseQuant(event) {
    const item = JSON.parse(event.target.value);
    item.quant += 1;
    localStorage.setItem(`${JSON.parse(event.target.value).custom}`,
      JSON.stringify(item));
    this.setState({
      [`${JSON.parse(event.target.value).custom}`]:
      JSON.stringify(item),
    });
  }

  decreaseOrDelete(event) {
    const item = JSON.parse(event.target.value);
    if (item.quant <= 1) {
      localStorage.removeItem(`${JSON.parse(event.target.value).custom}`);
      this.setState({
        [`${JSON.parse(event.target.value).custom}`]: 0 });
      return '';
    }
    item.quant -= 1;
    localStorage.setItem(`${JSON.parse(event.target.value).custom}`,
      JSON.stringify(item));
    this.setState({
      [`${JSON.parse(event.target.value).custom}`]:
      JSON.stringify(item),
    });
  }

  deleteItem(event) {
    localStorage.removeItem(`${JSON.parse(event.target.value).custom}`);
    this.setState({
      [`${JSON.parse(event.target.value).custom}`]: 0 });
  }

  renderCartItem() {
    const cartItens = Object.values(localStorage).map((item) => {
      item = JSON.parse(item);
      return (
        <section key={ item.custom }>
          <div>
            <img src={ item.thumbnail } alt={ item.title } />
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <p>{ item.price }</p>
          </div>
          <div>
            <button
              data-testid="product-increase-quantity"
              type="button"
              value={ JSON.stringify(item) }
              onClick={ this.increaseQuant }
            >
              +
            </button>
            <p
              data-testid="shopping-cart-product-quantity"
              value={ JSON.stringify(item) }
            >
              { item.quant }
            </p>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              value={ JSON.stringify(item) }
              onClick={ this.decreaseOrDelete }
            >
              -
            </button>
            <button
              type="button"
              value={ JSON.stringify(item) }
              onClick={ this.deleteItem }
            >
              x
            </button>
          </div>
        </section>
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
        <button type="button">
          <Link to="/checkout" data-testid="checkout-products">
            checkout
          </Link>
        </button>
      </section>
    );
  }
}

export default ShoppingCart;
