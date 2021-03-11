import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCard extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h3 className="card-title">{ title }</h3>
        <div className="image">
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </div>
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
