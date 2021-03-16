import React, { Component } from 'react';
import Proptypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    return (
      <div data-testid="product" className="item-card">
        <p>{title}</p>
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{price}</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  productObj: Proptypes.shape({
    title: Proptypes.string,
    price: Proptypes.number,
    thumbnail: Proptypes.string,
  }).isRequired,
};

export default ItemCard;
