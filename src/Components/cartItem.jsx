import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dataCart from '../services/dataCart';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
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

  addItem(count) {
    if (count >= 0) this.setState({ counter: count + 1 });
  }

  subtractItem(count) {
    if (count > 0) this.setState({ counter: count - 1 });
  }

  render() {
    const { card } = this.props;
    const { card: { thumbnail, title, price }, index } = this.props;
    const { counter } = this.state;
    return (index === dataCart.findIndex((item) => item === card) // encontra o índice da primeira instância de cada item
      ? ( // apenas o primeiro de cada item é renderizado
        <div>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${(counter * price).toFixed(2)}`}</p>
          <p data-testid="shopping-cart-product-quantity">{`Qt.: ${counter}`}</p>
          <button
            type="button"
            onClick={ () => this.subtractItem(counter) }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button
            type="button"
            onClick={ () => this.addItem(counter) }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      ) : null // sem mais divs vazias
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
