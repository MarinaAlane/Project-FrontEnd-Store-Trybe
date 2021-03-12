import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductsList extends React.Component {
  render() {
    const { productsList: { results }, addToCartBtn } = this.props;
    return (
      <div>
        { results.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            addToCartBtn={ addToCartBtn }
          />
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.object.isRequired,

}.isRequired;

export default ProductsList;
