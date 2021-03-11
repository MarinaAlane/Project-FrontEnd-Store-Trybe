import React from 'react';

import Header from '../components/Header';

class ShoppingCart extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </main>
      </>
    );
  }
}

export default ShoppingCart;
