import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { products: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="img" />
        <p>{ price }</p>
      </div>
    );
  }
}

// estrutura do card ok!

ItemCard.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

// corrigido propTypes

export default ItemCard;
