import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { details } = location.state;
    const { title, price, thumbnail, sold_quantity: soldQuantity } = details;
    return (
      <div className="product-detail">
        <h2 data-testid="product-detail-name">{ `${title} - R$${price}` }</h2>
        <img alt={ `${title}` } src={ thumbnail } className="product-image" />
        <div className="specs">
          <h4>Especificações</h4>
          <p>{ `Unidades vendidas: ${soldQuantity}` }</p>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      details: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        sold_quantity: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
