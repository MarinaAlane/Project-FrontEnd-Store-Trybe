import React from 'react';
import Proptypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { thumbnail, title } = product;
    return (
      <div data-testid="product-detail-name">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  location: Proptypes.shape({
    product: Proptypes.shape({
      title: Proptypes.string,
      thumbnail: Proptypes.string,
    }),
  }).isRequired,

};

export default ProductDetails;
