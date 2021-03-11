import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, click } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ price }</h3>
        <button
          type="button"
          value={ id }
          onClick={ click }
          data-testid="product-add-to-cart"
        >
          Adicionar
        </button>
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
