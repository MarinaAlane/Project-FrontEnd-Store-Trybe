import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, category_id: CategoryId, id } = product;
    return (
      <Link
        data-testid="product-detail-link"
        to={ `/${CategoryId}/${id}` }
        className="linkProductCard"
      >
        <li data-testid="product" className="productCardContainer">
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ `foto-${title}` } />
          <p>{ price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
        </li>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf().isRequired,
};

export default ProductCard;
