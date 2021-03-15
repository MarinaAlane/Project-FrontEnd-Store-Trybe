import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
    this.renderNoItemsMessage = this.renderNoItemsMessage.bind(this);

    this.state = {
      onCart: undefined,
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems')) {
      const items = localStorage.getItem('cartItems');
      this.setState({
        onCart: JSON.parse(items),
      });
    }
  }

  renderCartItems() {
    const { onCart } = this.state;
    return onCart.map((item1) => {
      const quantity = onCart.filter((item2) => item1.title === item2.title).length;
      return (
        <div key={ item1.id }>
          <p data-testid="shopping-cart-product-name">{item1.title}</p>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        </div>
      );
    });
  }

  renderNoItemsMessage() {
    return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }

  render() {
    const { onCart } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {(onCart) && this.renderCartItems()}
        {(!onCart) && this.renderNoItemsMessage()}
      </div>
    );
  }
}

export default Cart;
