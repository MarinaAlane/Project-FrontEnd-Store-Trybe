import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../../components/CartProduct';
import InputContext from '../../components/InputContext';

export default class CartPage extends Component {
  removeDuplicates(array) {
    return array.filter(({ id: id1 }, index) => (
      index === array.findIndex(({ id: id2 }) => (
        id1 === id2
      ))
    ));
  }

  render() {
    return (
      <div>

        <InputContext.Consumer>
          {
            ({ cartProducts }) => {
              const products = this.removeDuplicates(cartProducts);
              return !cartProducts.length
                ? (
                  <div data-testid="shopping-cart-empty-message">
                    Seu carrinho está vazio
                  </div>
                )
                : (
                  products.map((product) => {
                    const { id: prodId } = product;
                    const quantity = cartProducts.reduce((acc, { id }) => (
                      id === prodId ? acc + 1 : acc
                    ), 0);
                    return (<CartProduct
                      key={ product.id }
                      info={ { ...product, quantity } }
                    />);
                  })
                );
            }
          }
        </InputContext.Consumer>
        <Link data-testid="checkout-products" to="/cart/checkout">Finalizar compra</Link>
      </div>
    );
  }
}
