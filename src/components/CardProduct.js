import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <Link to='/details-page'>Ver Detalhes</Link>
      </section>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProduct;
