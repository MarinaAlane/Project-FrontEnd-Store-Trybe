import React, { Component } from 'react';

class ProductCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productQuantity: 1,
    }
  }

  render() {
    const { id, title, thumbnail, price } = this.props;
    const { productQuantity } = this.state;

    return (
      <div data-testid="shopping-cart-product-name">
        <p className="products-title">{title}</p>
        <img className="products-image" src={thumbnail} alt={title} />
        <p className="products-price">{price}</p>
        <p data-testid="shopping-cart-product-quantity">Quantidade: {productQuantity}</p>
      </div>
    );
  }
}

export default ProductCart;
