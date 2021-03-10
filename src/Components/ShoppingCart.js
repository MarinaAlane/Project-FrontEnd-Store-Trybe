import React from  'react';


class ShoppingCart extends React.Component {
  render() {
    return(
      <p data-testId='shopping-cart-empty-message'>Seu carrinho está vazio</p>
    );
  }
}

export default ShoppingCart;
