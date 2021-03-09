import React, { Comment } from 'react';

class Cart extends Comment {
  render() {
    return (
      <p className="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default Cart;
