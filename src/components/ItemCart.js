import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div data-testid="product">
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
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
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
}.isRequired;

export default ItemCart;
