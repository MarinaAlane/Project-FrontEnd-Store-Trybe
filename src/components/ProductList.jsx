import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductsList extends React.Component {
  render() {
    const { productsFromQuery } = this.props;
    return (
      <div>
        { productsFromQuery
          .map((product) => (<ProductCard
            data={ product }
            key={ product.id }
          />)) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
