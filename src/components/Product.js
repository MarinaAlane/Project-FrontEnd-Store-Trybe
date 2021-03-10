import React from 'react';
import { string, number, shape } from 'prop-types';
import AddToCartButton from './AddToCartButton';

class Products extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{ title }</p>
        <p>{ `R$ ${price}` }</p>
        <AddToCartButton datatestid="product-add-to-cart" productName={ title } />
      </div>
    );
  }
}

Products.propTypes = {
  product: shape({
    title: string.isRequired,
    price: number.isRequired,
    thumbnail: string.isRequired,
  }).isRequired,
};

export default Products;
