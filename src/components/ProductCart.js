import React from 'react';
import { string, number, shape } from 'prop-types';

export default class ProductCart extends React.Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity() {
    this.setState((oldState) => ({
      quantity: oldState.quantity + 1,
    }));
  }

  decreaseQuantity() {
    this.setState((oldState) => ({
      quantity: oldState.quantity <= 1 ? 1 : oldState.quantity - 1,
    }));
  }

  render() {
    const { item } = this.props;
    const { title, price } = item;
    const { quantity } = this.state;
    return (
      <article>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price * quantity }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQuantity }
        >
          +
        </button>
      </article>
    );
  }
}

ProductCart.propTypes = {
  item: shape({
    title: string,
    price: number,
  }),
};

ProductCart.defaultProps = {
  item: shape({
    title: '',
    price: '',
  }),
};
