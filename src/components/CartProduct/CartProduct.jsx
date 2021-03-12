import React, { Component } from 'react';
import { number, string, shape } from 'prop-types';
import InputContext from '../InputContext';

class CartProduct extends Component {
  render() {
    const { info } = this.props;
    const { title, thumbnail, price, quantity } = info;
    return (
      <InputContext.Consumer>
        {
          () => (
            <section>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            </section>
          )
        }
      </InputContext.Consumer>
    );
  }
}

CartProduct.contextType = InputContext;

CartProduct.propTypes = {
  info: shape({
    price: number,
    thumbnail: string,
    id: string,
    title: string,
  }),
}.isRequired;

export default CartProduct;
