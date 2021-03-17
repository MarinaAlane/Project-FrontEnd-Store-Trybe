import React from 'react';
import PropTypes from 'prop-types';
import AddProductToCartButton from './AddProductToCartButton';

class CardProduct extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <div><h2>{ product.title }</h2></div>
        <img src={ product.thumbnail } alt="Imagen Produto" />
        <span>
          {`R$ ${product.price}` }
        </span>
        <AddProductToCartButton product={ product } />
      </section>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProduct;
