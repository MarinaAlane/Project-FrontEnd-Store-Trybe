import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    const { cartList } = this.props;

    return (
      <section className="cart-container">
        <Link to="/">Voltar</Link>
        { cartList.length > 0
          ? cartList.map((currentItem) => (
            <CartItem key={ currentItem.id } item={ currentItem } />
          ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}

      </section>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.arrayOf(Object),
};

Cart.defaultProps = {
  cartList: PropTypes.arrayOf(Object),
};

export default Cart;
