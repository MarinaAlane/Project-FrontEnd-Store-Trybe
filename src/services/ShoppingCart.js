import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpdateQty from './UpdateQty';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartList: [],
    };
    this.shoppingCartItemsList = this.shoppingCartItemsList.bind(this);
    this.updateQty = this.updateQty.bind(this);
  }

  shoppingCartItemsList(cartItemsArray) {
    return (
      <ul>
        { cartItemsArray.map((cartItem) => (
          <li
            key={ cartItem.id }
          >
            <img src={ cartItem.thumb } alt={ `Imagem de ${cartItem.name}` } />
            <span> | </span>
            <span data-testid="shopping-cart-product-name">{ cartItem.name }</span>
            <span> | </span>
            <span data-testid="shopping-cart-product-quantity">
              { cartItem.quantity }
            </span>
            <span> | </span>
            <span>{ cartItem.price * cartItem.quantity }</span>
            <UpdateQty product={ cartItem } updateQty={ this.updateQty } />
          </li>
        )) }
      </ul>
    );
  }

  updateQty(product, sign) {
    const itemsFromCart = JSON.parse(localStorage.getItem('shoppingCartList'));
    const updatedProduct = itemsFromCart.find((item) => item.id === product.id);
    if (sign === '+') updatedProduct.quantity += 1;
    if (sign === '-') updatedProduct.quantity -= 1;
    const newCart = itemsFromCart;
    itemsFromCart.forEach((item, index) => {
      if (item.id === product.id) {
        newCart[index] = updatedProduct;
      }
    });
    localStorage.setItem('shoppingCartList', JSON.stringify(newCart));
    this.setState({ shoppingCartList: newCart });
  }

  render() {
    let cartList = localStorage.getItem('shoppingCartList');
    if (cartList) {
      cartList = JSON.parse(cartList);
    } else { cartList = []; }
    return (
      <section>
        <Link to="/">
          <button type="button">VOLTAR</button>
        </Link>
        <h1>Carrinho de Compras</h1>
        { cartList.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : this.shoppingCartItemsList(cartList)}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCartList: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

ShoppingCart.defaultProps = {
  shoppingCartList: [],
};

export default ShoppingCart;
