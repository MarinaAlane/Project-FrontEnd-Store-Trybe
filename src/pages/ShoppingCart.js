import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/pages/ShoppingCart.css';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItemsList: [],
    };
    this.updateCartItems = this.updateCartItems.bind(this);
  }

  componentDidMount() {
    this.updateCartItems();
  }

  updateCartItems() {
    const { cartItems } = this.props;
    const cartItemsList = cartItems.reduce((arr, item) => {
      const quant = cartItems.filter((currItem) => currItem === item).length;
      if (!(arr.some((currItem) => currItem.item.id === item.id))) {
        arr.push({ item, quant });
      }
      return arr;
    }, []);
    this.setState({
      cartItemsList,
    });
  }

  render() {
    const { emptyCart } = this.props;
    const { cartItemsList } = this.state;
    return (
      <>
        <div className="cart-header-container">
          <Link to="/">
            <button type="button" alt="return-button" />
          </Link>
        </div>
        { !(emptyCart) ? (
          <div className="shopping-cart-list">
            <h2>Carrinho de Compras</h2>
            { cartItemsList
              .map((item) => <CartItem key={ item.item.id } product={ item } />) }
          </div>
        ) : (
          <div
            className="empty-message-container"
            data-testid="shopping-cart-empty-message"
          >
            <img src="/images/icons8-empty-box-100.png" alt="Empty Box" />
            <span>Seu carrinho está vazio</span>
          </div>
        ) }
      </>
    );
  }
}

ShoppingCart.propTypes = {
  emptyCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
