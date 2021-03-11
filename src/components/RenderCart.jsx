import React from 'react';
import PropTypes from 'prop-types';

class RenderCarts extends React.Component {
  render() {
    const { name, quantity } = this.props;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ name }</h4>
        <h6 data-testid="shopping-cart-product-quantity">{ quantity }</h6>
      </div>
    );
  }
}

RenderCarts.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default RenderCarts;
