import React, { Component } from 'react';
import CartProduct from '../../components/CartProduct';
import InputContext from '../../components/InputContext';

export default class CartPage extends Component {
  removeDuplicates(array) {
    return array.filter((item, index) => (
      index === array.findIndex((item2) => (
        JSON.stringify(item2) === JSON.stringify(item)
      ))
    ));
  }

  render() {
    return (
      <InputContext.Consumer>
        {
          ({ cartProducts }) => {
            const products = this.removeDuplicates(cartProducts);
            console.log(products);

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
    );
  }
}
