import React from 'react';
import PropTypes from 'prop-types';
// import * as api from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        { products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};

export default ProductList;
