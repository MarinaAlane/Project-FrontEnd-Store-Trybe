import React from 'react';

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

export default RenderCarts;