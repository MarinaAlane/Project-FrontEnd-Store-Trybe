import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { shoppingCartList } = location.state;
    this.state = {
      shoppingCartList,
    };
    this.shoppingCartItemsList = this.shoppingCartItemsList.bind(this);
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
          </li>
        )) }
      </ul>
    );
  }

  render() {
    const { shoppingCartList } = this.state;
    return (
      <section>
        <Link to="/">
          <button type="button">VOLTAR</button>
        </Link>
        <h1>Carrinho de Compras</h1>
        <button type="button" onClick={ () => console.log(shoppingCartList) }>aaa</button>
        { shoppingCartList.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : this.shoppingCartItemsList(shoppingCartList)}
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
