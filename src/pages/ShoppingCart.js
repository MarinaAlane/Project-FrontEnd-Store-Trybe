import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const {
      location: {
        state: { cartList },
      },
    } = this.props;
    return cartList.length !== 0 ? (
      cartList.map((cartItem) => (
        <div key={ cartItem.id }>
          <div>
            <p data-testid="shopping-cart-product-name">{ cartItem.title }</p>
            <img src={ cartItem.thumbnail } alt="product" />
            <p>{ cartItem.price }</p>
            <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
          </div>
        </div>
      ))
    ) : (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }),
  }),
}.isRequired;

export default ShoppingCart;
