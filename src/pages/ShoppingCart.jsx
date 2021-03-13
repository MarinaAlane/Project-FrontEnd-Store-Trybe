import React from 'react';
import { arrayOf, object } from 'prop-types';
import CartProduct from '../components/CartProduct';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { location: { state: { cartProducts } } } = this.props;
    if (cartProducts.length !== 0) {
      return cartProducts
        .map((product) => <CartProduct key={ product.id } product={ product } />);
    }

    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: arrayOf(object),
}.isRequired;

export default ShoppingCart;
