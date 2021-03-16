import React from 'react';
import PropTypes from 'prop-types';
import ItemCart from './ItemCart';

class Cart extends React.Component {
  render() {
    const { itemsCart } = this.props;
    if (itemsCart.lenght < 1) {
      return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    }
    return (
      <div>
        {itemsCart.map((item) => <ItemCart key={ item.id } item={ item } />)}
      </div>
    );
  }
}

Cart.propTypes = {
  itemsCart: PropTypes.arrayOf(),
}.isRequired;

export default Cart;
