import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <section data-testid="product">
        <Link data-testid="product-detail-link" to={ `/details/${id}` }>
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
      </section>
    );
  }
}

const { shape, string, number } = PropTypes;

Product.propTypes = {
  product: shape({
    title: string,
    price: number,
    thumbnail: string,
  }),
}.isRequired;

export default Product;
