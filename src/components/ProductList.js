import React from 'react';
import PropTypes from 'prop-types';
import ProductDetails from '../pages/ProductDetails';

class ProductList extends React.Component {
  render() {
    const { arrayOfProducts } = this.props;

    return (
      <div>
        { arrayOfProducts.map((item) => (<ProductDetails
          key={ item.id }
          product={ item }
        />)) }
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  arrayOfProducts: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
