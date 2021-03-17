import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.renderShoppingCart = this.renderShoppingCart.bind(this);
    this.productIncrease = this.productIncrease.bind(this);
    this.productDecrease = this.productDecrease.bind(this);
    this.state = {
      shoppingCart: props.shoppingCart,
    };
  }

  catchIndexOfObjectToRemove(shoppingCart, obj) {
    let indexOfObjectToRemove = 0;
    if (shoppingCart.indexOf(obj) - 1 < 0) {
      return indexOfObjectToRemove;
    }
    indexOfObjectToRemove = shoppingCart.indexOf(obj) - 1;
    return indexOfObjectToRemove;
  }

  functionToRemoveObject(shoppingCart, obj) {
    const indexOfObjectToRemove = this.catchIndexOfObjectToRemove(shoppingCart, obj);
    return indexOfObjectToRemove === 0
      ? shoppingCart.unshift()
      : shoppingCart.splice(indexOfObjectToRemove, 1);
  }

  productIncrease(product) {
    const { shoppingCart } = this.state;
    const newCart = shoppingCart.map((obj) => {
      if (obj.id === product.id) {
        if (obj.available_quantity > obj.quantity) {
          obj.quantity += 1;
        }
        return obj;
      }
      return obj;
    });
    this.setState({ shoppingCart: newCart });
  }

  productDecrease(product) {
    const { shoppingCart } = this.state;
    const newCart = shoppingCart.map((obj) => {
      if (obj.id === product.id) {
        if (obj.quantity > 0) {
          obj.quantity -= 1;
        }
        // return this.functionToRemoveObject(shoppingCart, obj);
        return obj;
      }
      return obj;
    });
    this.setState({ shoppingCart: newCart });
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state;
    if (shoppingCart.length === 0) {
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return shoppingCart.map((product) => (
      <div key={ Math.random() }>
        <img src={ product.thumbnail } alt={ product.title } />
        <button
          type="button"
          onClick={ () => this.functionToRemoveObject(shoppingCart, product) }
        >
          x
        </button>
        <span data-testid="shopping-cart-product-name">{ product.title }</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.productDecrease(product) }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.productIncrease(product) }
        >
          +
        </button>
      </div>
    ));
  }

  render() {
    const { shoppingCart } = this.state;
    const { getCheckout } = this.props;
    return (
      <div>
        { this.renderShoppingCart() }
        <Link
          to="/checkout"
          data-testid="checkout-products"
          onClick={ () => getCheckout(shoppingCart) }
        >
          Checkout
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default ShoppingCart;
