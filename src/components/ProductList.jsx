import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../componentStyles/ProductList.css';

class ProductsList extends React.Component {
  render() {
    const { productsFromQuery, addProductToCart } = this.props;
    return (
      <div className="products-list">
        { productsFromQuery
          .map((product) => (<ProductCard
            data={ product }
            key={ product.id }
            addProductToCart={ addProductToCart }
          />)) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductsList;
