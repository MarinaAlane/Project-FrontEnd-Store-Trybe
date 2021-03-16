import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <li>
        <span data-testid="shopping-cart-product-name">{title}</span>
        <input
          type="number"
          step="1"
          min="1"
          data-testid="shopping-cart-product-quantity"
        />
      </li>
    );
  }
}

CartItem.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

CartItem.defaultProps = {
  productInfo: {},
};

export default CartItem;
