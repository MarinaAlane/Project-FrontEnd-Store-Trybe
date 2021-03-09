import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } />
        <p>R$ { price }</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};

export default ItemCard;
