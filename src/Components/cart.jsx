import React, { Component } from 'react';
import dataCart from '../services/dataCart';

class Cart extends Component {
  render() {
    return (
      <div>
        {dataCart.length < 1
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : dataCart.map((card) => (
            <div key={ card.id }>
              <p data-testid="shopping-cart-product-name">{ card.title }</p>
              <img src={ card.thumbnail } alt="img" />
              <p>{card.price}</p>
              <p data-testid="shopping-cart-product-quantity"> 1 </p>
            </div>
          ))}
      </div>
    );
  }
}

export default Cart;
