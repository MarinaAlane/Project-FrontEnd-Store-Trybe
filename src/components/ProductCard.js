import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt="Imagem do Produto" />
        <p>{ product.price }</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
