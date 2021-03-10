import React from 'react';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';
import AddToCartButton from './AddToCartButton';

class Products extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail, category_id: categoryId } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{ title }</p>
        <p>{ `R$ ${price}` }</p>
        <Link
          to={ `details/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          Detalhe
        </Link>
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
    category_id: string.isRequired,
  }).isRequired,
};

export default Products;
