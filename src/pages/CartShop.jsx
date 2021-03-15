import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartHandler from '../services/cart';

require('./CartShop.css');

export default class CartShop extends React.Component {
  constructor() {
    super();
    this.state = {
      items: CartHandler.items,
    };
  }

  render() {
    const { items } = this.state;
    const cartIsEmpty = items.length === 0;

    return (
      <main>
        <h1>
          <FiShoppingCart />
          Carrinho de compras
        </h1>
        <div className="CartShop__List">
          { cartIsEmpty
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : items.map((item) => <CartItem key={ item.id } item={ item } />) }
        </div>
        <Link to="/">Continuar comprando</Link>
      </main>
    );
  }
}
