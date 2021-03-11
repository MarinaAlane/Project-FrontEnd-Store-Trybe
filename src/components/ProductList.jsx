import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import * as cart from '../services/cart';

class ProductList extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click(event) {
    const id = event.target.value;
    cart.cart(localStorage.getItem('query'), id);
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <ProductCard key={ product.id } product={ product } click={ this.click }/>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};

export default ProductList;
