import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="pictyre" />
        <p>
          R$:
          { price }
        </p>
        <Link
          data-testid="product-detail-link"
          key={ id }
          to={ { pathname: `/product/${id}`, state: { product } } }
        >
          Ver detalhes
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
