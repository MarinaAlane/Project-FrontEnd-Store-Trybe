import React from 'react';

import PropTypes from 'prop-types';
import ItemsCart from './ItemsCart';

class Carrinho extends React.Component {
  render() {
    const { products } = this.props;
    if (products.length > 0) {
      return (
        <section>
          { products.map((item) => (
            <ItemsCart key={ item.id } productInfo={ item } />
          ))}
        </section>
      );
    }
    return (
      <section>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </section>
    );
  }
}

Carrinho.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

Carrinho.defaultProps = {
  products: [],
};

export default Carrinho;
