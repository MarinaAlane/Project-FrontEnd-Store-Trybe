import React, { Component } from 'react';
class CartButton extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        Carrinho
      </Link>
    );
  }
}

export default CartButton;
