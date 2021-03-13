import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends React.Component {
  constructor() {
    super();
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.sumQuantity = this.sumQuantity.bind(this);
    this.state = { counter: 1 };
  }

  subtractQuantity() {
    const { counter } = this.state;
    if (counter <= 0) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: counter - 1,
      });
    }
  }

  sumQuantity() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  render() {
    const { product } = this.props;
    const { image, title, price, id } = product;
    const { counter } = this.state;
    return (
      <div data-testid="shopping-cart-product-name" key={ id }>
        <img src={ image } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <p>
          Valor total:
          { price * counter }
        </p>
        <div>
          <span>Quantidade:</span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.subtractQuantity }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{ counter }</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.sumQuantity }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ShoppingCartItem;
