import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardShoppingCart.css';

class CardShoppingCart extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, quantity } = product;
    return (
      <li className="cardShoppingCartContainer">
        <img src={ thumbnail } alt={ `imagem ${title}` } />
        <div>
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <p>{ price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            { quantity }
          </p>
        </div>
      </li>
    );
  }
}

CardShoppingCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CardShoppingCart;
