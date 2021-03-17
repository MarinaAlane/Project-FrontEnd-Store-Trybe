import React from 'react';

import Header from '../components/Header';
import ArrowBack from '../components/ArrowBack';
import ShoppingIcon from '../components/ShoppingIcon';
import ProductsInCart from '../components/ProductsInCart';

class ShoppingCart extends React.Component {
  render() {
    const showInput = false;
    const showSearchButton = false;
    //const emptyCart = true;
    return (
      <>
        <ArrowBack />
        <Header
          showInput={ showInput }
          showSearchButton={ showSearchButton }
        />
        <main className="main">
          <ShoppingIcon />
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <ProductsInCart />
        </main>
      </>
    );
  }
}

export default ShoppingCart;
