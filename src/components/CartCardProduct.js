import React from 'react';
import PropTypes from 'prop-types';

class CartCardProduct extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <img src={ thumbnail } alt="Imagen do produto" />
        <p>
          R$
          { price }
        </p>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </div>
    );
  }
}

CartCardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartCardProduct;
