import React from 'react';

import PropTypes from 'prop-types';
import ItemsCart from './ItemsCart';

class Carrinho extends React.Component {
  render() {
    const { products, removeProduct } = this.props;
    if (products.length > 0) {
      return (
        <section>
          { products.map((item) => (
            <ItemsCart
              key={ item.id }
              productInfo={ item }
              removeProduct={ removeProduct }
            />
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
  removeProduct: PropTypes.func.isRequired,
};

Carrinho.defaultProps = {
  products: [],
};

export default Carrinho;
