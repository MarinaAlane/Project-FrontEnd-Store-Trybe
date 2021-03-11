import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

class ButtonShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <FaShoppingCart size={ 28 } color="rgb(0, 0, 0)" />
        </Link>
      </div>
    );
  }
}

export default ButtonShoppingCart;
