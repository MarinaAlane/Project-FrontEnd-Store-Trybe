import React from 'react';
import RenderCarts from './RenderCart';

class ShoppingCart extends React.Component {
  render() {
    if (localStorage.carrinho === undefined) {
      return (
        <div>
          <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
        </div>
      );
    }
    return (
      <div>
        { JSON.parse(localStorage.carrinho).map(({ title, count, id }) => (
          <div key={ id }>
            <RenderCarts title={ title } count={ count } />
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
