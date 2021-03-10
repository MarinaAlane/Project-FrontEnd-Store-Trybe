import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.getProductsInStorage = this.getProductsInStorage.bind(this);
  }

  getProductsInStorage() {
    const cartItems = JSON.parse(localStorage.getItem('itens'));
    if (cartItems.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return cartItems.map((item) => <ProductCart key={ item.id } item={ item } />);
  }

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
        { this.getProductsInStorage() }
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
