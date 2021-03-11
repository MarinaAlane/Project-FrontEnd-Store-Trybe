import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    // VQV!
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}

export default ShoppingCart;
