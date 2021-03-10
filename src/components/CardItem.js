import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends Component {
  render() {
    const { item: { title, price, thumbnail, id } } = this.props;
    return (
      <Link to={ `/details/${id}` }>
        <div data-testid="product">
          <h4>{ title }</h4>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
      </Link>
    );
  }
}

CardItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default CardItem;
