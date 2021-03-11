import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <Link
            to={ { pathname: `/details/${product.id}`, state: { product } } }
            key={ product.id }
            data-testid="product-detail-link"
          >
            <ProductCard
              key={ product.id }
              product={ product }
            />
          </Link>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
