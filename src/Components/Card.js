import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;

    return (
      <div data-testid="product" className="card">
        <p className="card-title">{title}</p>
        <img className="card-img" src={ thumbnail } alt={ title } />
        <p className="card-price">{`R$ ${price}`}</p>
        <Link
          to={ { pathname: `/productDetails/${id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          Detalhes do Produto
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
