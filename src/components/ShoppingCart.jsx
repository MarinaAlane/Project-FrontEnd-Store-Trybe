import React from 'react';
import { Link } from 'react-router-dom';
import ProductsAtCart from '../services/data';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.emptyMessage = this.emptyMessage.bind(this);
    this.renderCardItem = this.renderCardItem.bind(this);
  }

  emptyMessage() {
    return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
  }

  renderCardItem() {
    return ProductsAtCart.map(({ image, title, price, id }) => (
      <div data-testid="shopping-cart-product-name" key={ id }>
        <img src={ image } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    ));
  }

  render() {
    console.log(ProductsAtCart);
    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          { ProductsAtCart.length === 0 ? this.emptyMessage() : this.renderCardItem() }
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
