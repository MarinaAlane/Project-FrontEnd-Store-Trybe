import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCartButton() {
  return (
    <div>
      <Link to="/shoppingCart" data-testid="shopping-cart-button">
        <button type="button">
          <img src="../../public/shoppingCartIcon.svg" alt="Shopping Cart Icon" />
        </button>
      </Link>
    </div>
  );
}
