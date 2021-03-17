import React from 'react';
import PropTypes from 'prop-types';

export default class AddProductToCartButton extends React.Component {
  addToCart() {
    const productsCartKey = 'cart-products';
    const productsString = localStorage.getItem(productsCartKey);
    let products = [];
    if (productsString) {
      products = JSON.parse(productsString);
    }
    const { productId } = this.props;
    products.push(productId);
    localStorage.setItem(productsCartKey, JSON.stringify(products));
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
  productId: PropTypes.string.isRequired,
};
