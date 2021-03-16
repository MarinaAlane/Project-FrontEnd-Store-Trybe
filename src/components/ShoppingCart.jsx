import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.renderCartItem = this.renderCartItem.bind(this);
    this.increaseQuant = this.increaseQuant.bind(this);
    this.decreaseOrDelete = this.decreaseOrDelete.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.localStorageIsEmpty = this.localStorageIsEmpty.bind(this);
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

  localStorageIsEmpty() {
    let isEmpty = false;

    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));

    if (keys.length === 0) isEmpty = true;

    return isEmpty;
  }

  renderCartItem() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));
    const cartItens = keys.map((key) => {
      const item = JSON.parse(localStorage.getItem(key));
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
    if (this.localStorageIsEmpty()) {
      return (
        <>
          <Link to="/">Voltar</Link>
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        </>
      );
    }
    return (
      <>
        <Link to="/">Voltar</Link>
        <section>
<<<<<<< HEAD
          {this.renderCartItem()}
          <button type="button">
            <Link to="/checkout" data-testid="checkout-products">
              Checkout
            </Link>
          </button>
=======
          { this.renderCartItem() }
>>>>>>> 391902e534a71e01771eb8bd577726ce2ded11b3
        </section>
      </>
    );
  }
}

export default ShoppingCart;
