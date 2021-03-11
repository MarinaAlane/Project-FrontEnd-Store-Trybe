import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class ItemCard extends Component {
  render() {
    const { products } = this.props;
    const { title, price, thumbnail, id } = products;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { products },
          } }
          data-testid="product-detail-link "
        >
          <FontAwesomeIcon icon={ faInfoCircle } />
        </Link>
      </div>
    );
  }
}

ItemCard.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ItemCard;
