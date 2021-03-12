import React, { Component } from 'react';

class CartProduct extends Component {
  render() {
    const { product: { title, thumbnail, price, quantity } } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt="" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

export default CartProduct;
