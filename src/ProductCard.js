import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addProduct } = this.props;
    const { price, thumbnail, title } = product;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProduct(product) }
        >
          Adicionar no carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/productDetails', product } }
        >
          DETALHES
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
