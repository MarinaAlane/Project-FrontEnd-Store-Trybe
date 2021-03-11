import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { product } = location.state;
    this.state = {
      product,

    };
  }

  render() {
    const { product } = this.state;
    return (
      <div data-testid="product">
        <p data-testid="product-detail-name">{ product.title }</p>
        <img src={ product.thumbnail } alt={ `Imagem da ${product.title}` } />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,

}.isRequired;

export default ProductDetails;
