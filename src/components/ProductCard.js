import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
