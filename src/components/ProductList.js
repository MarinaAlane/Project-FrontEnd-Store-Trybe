import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../styles/components/ProductList.css';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="product-list-container">
        { products
          .map((product) => <ProductCard key={ product.id } product={ product } />) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ProductList;
