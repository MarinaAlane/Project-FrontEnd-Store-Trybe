import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { product } = this.props;
<<<<<<< HEAD
    const { title, price, thumbnail, id } = product;
    return (
      <section data-testid="product">
        <div className="products">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
          <span style={ { display: 'none' } }>{ id }</span>
        </div>
      </section>

=======
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
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
        </section>
      </Link>
>>>>>>> d3f29015bf4524769d7620ea1b620abc79817db5
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
