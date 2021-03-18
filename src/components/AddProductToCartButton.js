import React from 'react';
import PropTypes from 'prop-types';
import cart from '../services/cart';

export default class AddProductToCartButton extends React.Component {
  addToCart() {
    const product = this.props;
    cart.addToCart(product);
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => this.addToCart() }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddProductToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
