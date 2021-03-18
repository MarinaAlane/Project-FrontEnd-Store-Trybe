import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri";

import './CartProduct.css';

class CartProduct extends React.Component {
  render() {
    let { product, addItem, subtractItem } = this.props;
    return(
      <div className="cart-product-container">
        <button className="cart-button"><RiCloseCircleLine /></button>
        <img className="cart-img" src={ product.thumbnail } alt=""/>
        <p>{ product.name }</p>
        <button onClick={ () => subtractItem(product) } className="cart-button">-</button>
        <span>{ product.quantity }</span>
        <button onClick={ () => addItem(product) } className="cart-button">+</button>
        <p>`R$ ${product.price}`</p>
      </div>
    );
  }
}

export default CartProduct;
