import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id, attributes } = product;
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/details/${id}`,
          state: { title, price, thumbnail, attributes },
        } }
      >
        <section data-testid="product">
          <div className="products">
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <span style={ { display: 'none' } }>{ id }</span>
          </div>
        </section>
      </Link>
    );
  }
}

const { shape, string, number } = PropTypes;

Product.propTypes = {
  product: shape({
    title: string,
    price: number,
    thumbnail: string,
    id: string,
  }),
}.isRequired;

export default Product;
