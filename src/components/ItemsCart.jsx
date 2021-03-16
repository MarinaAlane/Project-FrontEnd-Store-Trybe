import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ItemsCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity() {
    this.setState((estadoAnterior) => ({
      quantity: estadoAnterior.quantity + 1,
    }));
  }

  decreaseQuantity() {
    this.setState((estadoAnterior) => (
      estadoAnterior.quantity !== 0 && { quantity: estadoAnterior.quantity - 1 }
    ));
  }

  render() {
    const { productInfo: { title, thumbnail, price }, removeProduct } = this.props;
    const { quantity } = this.state;
    return (
      <div data-testid="product">
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <button
          type="button"
          onClick={ () => removeProduct(title) }
        >
          X
        </button>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <p>{`R$ ${price}`}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increaseQuantity }
        >
          +
        </button>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
      </div>
    );
  }
}

ItemsCart.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
  removeProduct: PropTypes.func.isRequired,
};

ItemsCart.defaultProps = {
  productInfo: {},
};

export default ItemsCart;
