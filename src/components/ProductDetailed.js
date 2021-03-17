import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from './shopping_cart/ButtonCart';
import ArrowBack from './shopping_cart/logo_arrow_back.svg';

class ProductDetailed extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;
    return (
      <section>
        <Link to="/">
          <img src={ ArrowBack } alt="logo arrow back" />
        </Link>
        <Link to="/ShoppingCart">
          <ButtonCart />
        </Link>
        <section>
          <img src={ product.thumbnail } alt="Imagem do Produto" />
          <h3 data-testid="product-detail-name">{ product.title }</h3>
          <p>{ product.price }</p>
        </section>
      </section>
    );
  }
}

ProductDetailed.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default ProductDetailed;
