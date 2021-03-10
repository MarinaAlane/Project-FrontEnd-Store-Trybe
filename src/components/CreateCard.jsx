import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCard extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div className="card" data-testid="product">
        <h3>{ title }</h3>
        <img className="image" src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{ price }</p>
      </div>
    );
  }
}

CreateCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CreateCard;
