import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div data-testid="product" className="card">
        <p className="card-title">{title}</p>
        <img className="card-img" src={ thumbnail } alt={ title } />
        <p className="card-price">{`R$ ${price}`}</p>
        <Link to={ { pathname: "/product", state: { product } } } data-testid="product-detail-link">Detalhes do produto</Link>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
