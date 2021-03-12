import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { product } = this.props;
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
