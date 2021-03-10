import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, category_id: CategoryId, id } = product;
    return (
      <Link
        data-testid="product-detail-link"
        to={ `/${CategoryId}/${id}` }
      >
        <div data-testid="product">
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ `foto-${title}` } />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf().isRequired,
};

export default ProductCard;
