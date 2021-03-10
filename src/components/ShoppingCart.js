import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { idProduct, idCategory } = state;
    const path = idProduct === '' || idCategory === ''
      ? '/'
      : `/details/${idCategory}/${idProduct}`;
    return (
      <section>
        <Link to={ path }>
          <button type="button">VOLTAR</button>
        </Link>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  location: shape({
    state: shape({
      idCategory: string.isRequired,
      idProduct: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
