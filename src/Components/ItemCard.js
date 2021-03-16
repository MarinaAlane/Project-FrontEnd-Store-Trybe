import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product" className="item-card">
        <p>{title}</p>
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{price}</p>
        <Link to="/ProductDetails" data-testid="product-detail-link">Ver detalhes</Link>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  thumbnail: Proptypes.string.isRequired,
};

export default ItemCard;
