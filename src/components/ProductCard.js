import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { produtc } = this.props;
    const { id, title, thumbnail, price } = produtc;
    return (
      <div key={ id } data-testid="product">
        <p>{title}</p>
        <img alt="product" src={ thumbnail } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  produtc: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
