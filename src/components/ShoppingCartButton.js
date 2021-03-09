import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <button type="button">CARRINHO</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
