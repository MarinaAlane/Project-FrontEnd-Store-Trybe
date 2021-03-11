import React from 'react';
import { string } from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h1>{ title }</h1>
        <p>{ `R$ ${price.toFixed(2)}` }</p>
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
