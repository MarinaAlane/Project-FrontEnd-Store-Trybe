import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemCart from './ItemCart';

class Cart extends React.Component {
  render() {
    const { itemsCart } = this.props;
    if (!itemsCart.length) {
      return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    }
    return (
      <div>
        {itemsCart.map((item) => <ItemCart key={ item.id } item={ item } />)}
        <Link to="/checkout" className="button-link" data-testid="checkout-products">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  itemsCart: PropTypes.arrayOf(),
}.isRequired;

export default Cart;
