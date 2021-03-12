import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price }, product, onClick } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: '/product-details', state: { product } } }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ title } />
          <h3>{ title }</h3>
          <p>{ `R$ ${price.toFixed(2)}` }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => onClick(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: string,
  thumbnail: string,
  price: string,
}.isRequired;

export default ProductCard;
