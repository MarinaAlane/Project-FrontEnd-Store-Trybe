import React, { Component } from 'react';
import '../styles/components/ProductCard.css';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div className="movie-card" data-testid="product">
        <img src={ thumbnail } alt={ `${title}` } />
     <div>
        <p>{ title }</p>
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
