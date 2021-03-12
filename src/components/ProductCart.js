import React from 'react';
import { string, number, shape, func } from 'prop-types';

export default class ProductCart extends React.Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    const { item } = this.props;
    const { availableQuantity } = item;
    this.state = {
      quantity: 1,
      availableQuantity,
      buttonDisabled: false,
    };
  }

  handleClickDelete({ target }) {
    const { deleteItem } = this.props;
    deleteItem(target.value);
  }

  increaseQuantity() {
    const { availableQuantity, quantity } = this.state;
    if (quantity >= availableQuantity) return this.setState({ buttonDisabled: true });
    return this.setState((oldState) => ({
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
    const { id, title, price } = item;
    const { quantity, availableQuantity, buttonDisabled } = this.state;
    const precisionDecimal = 4;
    return (
      <article>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ parseFloat((price * quantity)).toPrecision(precisionDecimal) }</p>
        <p>{ `Estoque: ${availableQuantity}` }</p>
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
          { `${quantity}`.padStart(2, '0') }
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          disabled={ buttonDisabled }
          onClick={ this.increaseQuantity }
        >
          +
        </button>
        <button
          type="button"
          value={ id }
          onClick={ this.handleClickDelete }
        >
          Delete
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
  deleteItem: func,
};

ProductCart.defaultProps = {
  item: shape({
    title: '',
    price: '',
  }),
  deleteItem: () => {},
};
