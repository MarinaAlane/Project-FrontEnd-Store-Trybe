import React, { Component } from 'react';
import CartProduct from '../../components/CartProduct';
import InputContext from '../../components/InputContext';

export default class CartPage extends Component {
  render() {
    return (
      <InputContext.Consumer>
        {
          ({ cartProducts }) => (
            !cartProducts.length
              ? (
                <div data-testid="shopping-cart-empty-message">
                  Seu carrinho está vazio
                </div>
              )
              : (
                cartProducts.map((product) => (
                  <CartProduct key={ product.id } info={ product } />
                ))
              )
          )
        }
      </InputContext.Consumer>
    );
  }
}
