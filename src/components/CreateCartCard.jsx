import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCard extends Component {
  render() {
    const { product: { quant, title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h3 className="card-title" data-testid="shopping-cart-product-name">{ title }</h3>
        <div className="image">
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </div>
        <p data-testid="shopping-cart-product-quantity">{ quant } unidade(s)</p>
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