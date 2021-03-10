import React from 'react';
// import * as api from '../services/api';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h3 data-testid="product">{ title }</h3>
        <img data-testid="product" src={ thumbnail } alt={ title } />
        <h3 data-testid="product">{ price }</h3>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
