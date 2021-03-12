import React, { Component } from 'react';
import InputContext from '../InputContext';

class CartProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
    };
  }

  render() {
    const { cartProducts } = this.state;
    const { info } = this.props;
    const { title, id, thumbnail, price } = info;
    return (
      <InputContext.Consumer>
        {
          () => (
            <section>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">{}</p>
            </section>
          )
        }
      </InputContext.Consumer>
    );
  }
}

CartProducts.contextType = InputContext;

export default CartProducts;
