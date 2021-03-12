import React from 'react';

import Header from '../components/Header';
import ArrowBack from '../components/ArrowBack';
import ShoppingIcon from '../components/ShoppingIcon';

class ShoppingCart extends React.Component {
  render() {
    const showInput = false;
    return (
      <>
        <ArrowBack />
        <Header showInput={ showInput } />
        <main className="main">
          <ShoppingIcon />
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </main>
      </>
    );
  }
}

export default ShoppingCart;
