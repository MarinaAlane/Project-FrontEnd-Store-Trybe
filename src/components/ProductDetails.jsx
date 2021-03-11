import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const { product } = state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h3>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h4>Especificações Técnicas</h4>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
