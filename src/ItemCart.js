import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">
          1
        </p>
      </div>
    );
  }
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default ItemCart;
