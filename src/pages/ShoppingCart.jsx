import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.renderShopCart = this.renderShopCart.bind(this);
  }

  renderShopCart() {
    const { shoppingCart } = this.props;
    if (shoppingCart.length === 0) {
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return shoppingCart.map(({ title }) => (
      <div key={ Math.random() }>
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <span> - </span>
        <span data-testid="shopping-cart-product-quantity">{ shoppingCart.length }</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        { this.renderShopCart() }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default ShoppingCart;
