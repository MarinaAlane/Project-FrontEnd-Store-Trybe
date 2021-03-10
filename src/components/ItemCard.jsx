import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <section data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <span>{price}</span>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/item-details', state: { title, thumbnail, price } } }
        >
          Detalhes
        </Link>
      </section>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
