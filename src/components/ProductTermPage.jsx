import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductTermPage extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <section>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </section>
    );
  }
}

const { shape, string, number } = PropTypes;

ProductTermPage.propTypes = {
  product: shape({
    title: string,
    price: number,
    thumbnail: string,
  }),
}.isRequired;

export default ProductTermPage;
