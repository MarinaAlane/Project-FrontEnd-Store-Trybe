import React from 'react';
import PropTypes from 'prop-types';
import ProductsAtCart from '../services/data';

class ShoppingCartItem extends React.Component {
  constructor() {
    super();
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.sumQuantity = this.sumQuantity.bind(this);
    this.state = { counter: 1 };
  }

  subtractQuantity(product) {
    const { counter } = this.state;
    if (counter <= 0) {
      this.setState({
        counter: 0,
      });
      if (ProductsAtCart.some((element) => element.productId === product.productId)) {
        ProductsAtCart.forEach((element) => {
          if (element.productId === product.productId) {
            element.quantity = 0;
          }
        });
      }
    } else {
      this.setState({
        counter: counter - 1,
      });
      if (ProductsAtCart.some((element) => element.productId === product.productId)) {
        ProductsAtCart.forEach((element) => {
          if (element.productId === product.productId) {
            element.quantity -= 1;
          }
        });
      }
    }
  }

  sumQuantity(product) {
    const { product: { availableQnt } } = this.props;
    const { counter } = this.state;
    if (counter < availableQnt) {
      this.setState({
        counter: counter + 1,
      });
    }
    if (ProductsAtCart.some((element) => element.productId === product.productId)) {
      ProductsAtCart.forEach((element) => {
        if (element.productId === product.productId
          && counter < availableQnt) {
          element.quantity += 1;
          console.log('element dentro ', element);
        }
      });
    }
  }

  render() {
    const { product } = this.props;
    const { image, title, price, id } = product;
    const { counter } = this.state;
    return (
      <div data-testid="shopping-cart-product-name" key={ id }>
        <h1>{ title }</h1>
        <img src={ image } alt={ title } />
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
            onClick={ () => this.subtractQuantity(product) }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{ counter }</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.sumQuantity(product) }
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
