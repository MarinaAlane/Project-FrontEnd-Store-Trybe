import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <Link data-testid="product-detail-link" to={ `/ProductDetailed/${product.id}` }>
          <h3>{ product.title }</h3>
          <img src={ product.thumbnail } alt="Imagem do Produto" />
          <p>{ product.price }</p>
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
