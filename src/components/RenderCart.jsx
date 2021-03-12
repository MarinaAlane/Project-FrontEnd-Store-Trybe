import React from 'react';
import PropTypes from 'prop-types';

class RenderCarts extends React.Component {
  render() {
    const { title, count } = this.props;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { count }
        </p>
      </div>
    );
  }
}

RenderCarts.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default RenderCarts;
