import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Details = () => (
  <div>
    <Link to="/emptyCart" data-testid="shopping-cart-button">
      <FontAwesomeIcon icon={ faShoppingCart } />
    </Link>
  </div>
);

export default Details;
