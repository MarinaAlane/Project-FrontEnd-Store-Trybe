import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cartProducts } = this.props;
    if (cartProducts.length === 0) {
      return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Pagina inicial</Link>
      </div>
      )
    }
    return (
      <div>
        {/* renderizar os componetes productCart apartir do cartProducts
        Montar o componente productCart*/}
      </div>
    );
  }
}

export default ShoppingCart;
