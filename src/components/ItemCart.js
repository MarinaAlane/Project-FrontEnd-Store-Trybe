import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.increaseQtt = this.increaseQtt.bind(this);
  }

  decreaseQtt() {
    this.setState((previousState) => ({
      quantity: previousState.quantity - 1,
    }));
  }

  increaseQtt() {
    this.setState((previousState) => ({
      quantity: previousState.quantity + 1,
    }));
  }

  render() {
    const { quantity } = this.state;
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div data-testid="product">
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <br />
        <button
          type="button"
          onClick={ this.decreaseQtt }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        <button
          type="button"
          onClick={ this.increaseQtt }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
}.isRequired;

export default ItemCart;
