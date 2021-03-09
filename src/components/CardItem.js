import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { item: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

CardItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CardItem;
