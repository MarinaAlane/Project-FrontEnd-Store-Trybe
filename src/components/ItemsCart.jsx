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
<<<<<<< HEAD
    this.setState((estadoAnterior) => ({
      quantity: estadoAnterior.quantity + 1,
    }));
  }

  decreaseQuantity() {
    this.setState((estadoAnterior) => (
      estadoAnterior.quantity !== 0 && { quantity: estadoAnterior.quantity - 1 }
=======
    this.setState((previousState) => ({ quantity: previousState.quantity + 1 }));
  }

  decreaseQuantity() {
    this.setState((previousState) => (
      previousState.quantity !== 0 && { quantity: previousState.quantity - 1 }
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
    ));
  }

  render() {
<<<<<<< HEAD
    const { productInfo: { title, thumbnail, price } } = this.props;
=======
    const { productInfo: { title, thumbnail, price }, removeProduct } = this.props;
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
    const { quantity } = this.state;
    return (
      <div data-testid="product">
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
<<<<<<< HEAD
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
=======
        <button
          type="button"
          onClick={ () => removeProduct(title) }
        >
          X
        </button>
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increaseQuantity }
        >
          +
        </button>
<<<<<<< HEAD
        <button
          type="button" 
          data-testid="product-decrease-quantity"
=======
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
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
<<<<<<< HEAD
=======
  removeProduct: PropTypes.func.isRequired,
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
};

ItemsCart.defaultProps = {
  productInfo: {},
};

export default ItemsCart;
