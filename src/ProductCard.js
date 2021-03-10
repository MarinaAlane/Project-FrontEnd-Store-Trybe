import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { price, thumbnail, title } = product;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/productDetails', product } }
        >
          Teste
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: Proptypes.shape({
    price: Proptypes.number,
    thumbnail: Proptypes.string,
    title: Proptypes.string,
  }).isRequired,
};

export default ProductCard;
