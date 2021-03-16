import React, { Component } from 'react';
import '../styles/components/ProductCard.css';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product, addProductToCart } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div className="product-card" data-testid="product" id={ id }>
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{ title }</p>
        <p>{ `R$ ${price}` }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addProductToCart }
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
