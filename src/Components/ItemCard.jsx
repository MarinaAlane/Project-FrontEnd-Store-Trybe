import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{price}</p>
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