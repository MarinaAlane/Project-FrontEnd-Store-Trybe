import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import cart from '../services/cart';

class ProductList extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click(event) {
    const id = event.target.value;
    cart(localStorage.getItem('query'), id);
  }

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
              click={ this.click }
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
