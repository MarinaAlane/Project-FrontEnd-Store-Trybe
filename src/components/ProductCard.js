import React, { Component } from 'react';
import '../styles/components/ProductCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, addProductToCart } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div className="product-card" data-testid="product">
        <img src={ thumbnail } alt={ `${title}` } />
        <Link
          to={ `/productDetails/${id}` }
          data-testid="product-detail-link"
          product={ product }
        >
          <p>{ title }</p>
          <p>{ `R$ ${price.toFixed(2)}` }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProductToCart(id) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductCard;
