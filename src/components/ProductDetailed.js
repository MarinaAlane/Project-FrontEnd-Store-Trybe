import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from './shopping_cart/ButtonCart';
import ArrowBack from './shopping_cart/logo_arrow_back.svg';



class ProductDetailed extends React.Component {
  render() {
    return (
      <section>
        <Link to="/">
          <img src={ ArrowBack } alt="logo arrow back" />
        </Link>
        <Link to="/ShoppingCart">
          <ButtonCart />
        </Link>
      </section>
    );
  }
}

export default ProductDetailed;
