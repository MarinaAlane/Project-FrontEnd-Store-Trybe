import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <div data-testid="product" className="card">
        <p className="card-title">{title}</p>
        <img className="card-img" src={ thumbnail } alt={ title } />
        <p className="card-price">{`R$ ${price}`}</p>
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
