import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <Link to={ `product/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="Imagen do produto" />
          <p>
            R$
            { price }
          </p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
