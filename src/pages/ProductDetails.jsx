import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, arrayOf, object } from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, thumbnail, price, attributes } = product;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{ `R$ ${price}` }</p>
        {attributes.map((attribute) => (
          <p key={ attribute.id }>{ `${attribute.name}: ${attribute.value_name}` }</p>
        ))}
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: string,
  thumbnail: string,
  price: string,
  attributes: arrayOf(object),
}.isRequired;

export default ProductDetails;
