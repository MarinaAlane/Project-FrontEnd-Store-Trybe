import React from 'react';
import PropTypes from 'prop-types';
import ProductsAtCart from '../services/data';

class ProductCard extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={
            () => ProductsAtCart.push({ title, image, price })
          }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
