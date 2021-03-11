import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class CartProductList extends React.Component {
  render() {
    return (
      <header>
        <div>
          <input type="text" name="searchItens" />
          <Link
            to="/cartshop"
            data-testid="shopping-cart-button"
          >
            <FiShoppingCart />
          </Link>
        </div>
      </header>
    );
  }
}
