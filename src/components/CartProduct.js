import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri";

import './CartProduct.css';

class CartProduct extends React.Component {
  render() {
    let { product, addItem, subtractItem } = this.props;
    return(
      <div className="cart-product-container">
        <button className="cart-button"><RiCloseCircleLine /></button>
        <img className="cart-img" src={ product.product.thumbnail } alt=""/>
        <p>{ product.product.title }</p>
        <button
          onClick={ () => subtractItem(product) }
          className="cart-button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span>{ product.quantity }</span>
        <button
          onClick={ () => addItem(product) }
          className="cart-button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p>`R$ ${product.product.price}`</p>
      </div>
    );
  }
}

export default CartProduct;
