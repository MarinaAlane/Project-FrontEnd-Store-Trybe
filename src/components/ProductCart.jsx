import React from 'react';
import propTypes from 'prop-types';

class ProductCart extends React.Component {
  constructor(props) {
    super(props);
    const { eachProduct } = this.props;
    const { quantity } = eachProduct;
    this.state = {
      quantity,
    };
    this.productDecrease = this.productDecrease.bind(this);
    this.productIncrease = this.productIncrease.bind(this);
  }

  productIncrease() {
    this.setState((previousQuantity) => ({
      quantity: previousQuantity.quantity + 1,
    }));
  }

  productDecrease() {
    this.setState(({ quantity }) => ({
      quantity: (quantity > 0) ? quantity - 1 : 0,
    }));
  }

  render() {
    const { eachProduct } = this.props;
    const { title, price, thumbnail } = eachProduct;
    const { quantity } = this.state;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.productIncrease }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.productDecrease }
          >
            -
          </button>
          <button type="button">X</button>
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <img src={ thumbnail } alt={ title } />
        <hr />
      </div>
    );
  }
}
ProductCart.propTypes = {
  eachProduct: propTypes.shape({
    title: propTypes.string,
    price: propTypes.number,
    quantity: propTypes.number,
    thumbnail: propTypes.string,
  }),
}.isRequired;

export default ProductCart;
