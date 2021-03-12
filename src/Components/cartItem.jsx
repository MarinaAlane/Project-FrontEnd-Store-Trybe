import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataCart from '../services/dataCart';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.excludeItem = this.excludeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.subtractItem = this.subtractItem.bind(this);
  }

  componentDidMount() {
    const { card } = this.props;
    this.counterUpdate(card);
  }

  counterUpdate(item) {
    let count = 0;
    dataCart.forEach((card) => { if (card.id === item.id) count += 1; });
    this.setState({ counter: count });
  }

  addItem(item) {
    dataCart.push(item);
    this.counterUpdate(item);
  }

  subtractItem(index, item) {
    dataCart.splice(index, 1);
    this.counterUpdate(item);
  }

  excludeItem(item, counter) {
    for (let helper = 0; helper < counter; helper += 1) {
      dataCart.splice(dataCart.indexOf(item), 1);
    }
    this.counterUpdate(item);
  }

  render() {
    const { card } = this.props;
    const { card: { thumbnail, title, price }, index } = this.props;
    const { counter } = this.state;
    return (index === dataCart.findIndex((item) => item === card)
      ? (
        <div>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price.toFixed(2)}`}</p>
          <p data-testid="shopping-cart-product-quantity">{`Qtd.: ${counter}`}</p>
          <button
            type="button"
            onClick={ () => this.subtractItem(index, card) }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button
            type="button"
            onClick={ () => this.addItem(card) }
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            type="button"
          >
            x
          </button>
        </div>
      ) : <div />
    );
  }
}

CartItem.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CartItem;
