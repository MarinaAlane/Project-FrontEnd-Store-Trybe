import React from 'react';
import Proptypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products
          .map((product) => <ProductCard key={ product.id } product={ product } />)}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default ProductList;
