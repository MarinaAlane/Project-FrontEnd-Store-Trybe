import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h1>{ title }</h1>
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <Link to={ { pathname: '/product-details', state: { product } } } data-testid="product-detail-link">
          Ver detalhes
        </Link>
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
