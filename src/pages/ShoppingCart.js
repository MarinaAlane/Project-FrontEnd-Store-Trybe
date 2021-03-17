import React from 'react';

import Header from '../components/Header';
import ArrowBack from '../components/ArrowBack';
import ShoppingIcon from '../components/ShoppingIcon';
import ProductsInCart from '../components/ProductsInCart';

class ShoppingCart extends React.Component {
  render() {
    const showInput = false;
    const showSearchButton = false;
    const emptyCart = false;
    const emptyCartScreen = (
      <div>
        <ShoppingIcon />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
    return (
      <>
        <ArrowBack />
        <Header
          showInput={ showInput }
          showSearchButton={ showSearchButton }
        />
        <main className="main">
          {emptyCart ? emptyCartScreen : <ProductsInCart />}
        </main>
      </>
    );
  }
}

export default ShoppingCart;
