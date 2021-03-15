import React from 'react';

import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
import ItemsCart from './ItemsCart';

class Carrinho extends React.Component {
  render() {
<<<<<<< HEAD
    const { products } = this.props;
=======
    const { products, removeProduct } = this.props;
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
    if (products.length > 0) {
      return (
        <section>
          { products.map((item) => (
<<<<<<< HEAD
            <ItemsCart key={ item.id } productInfo={ item } />
          ))}
          <div>
            Preço Total:
            { products.reduce((total, item) => total + (item.price), 0)}
          </div>
          <Link to="/checkout" data-testid="checkout-products"> Finalizar Compra </Link>
=======
            <ItemsCart
              key={ item.id }
              productInfo={ item }
              removeProduct={ removeProduct }
            />
          ))}
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
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
<<<<<<< HEAD
=======
  removeProduct: PropTypes.func.isRequired,
>>>>>>> 0889567ab420733feb2f20a4be759fb6a4f57e0d
};

Carrinho.defaultProps = {
  products: [],
};

export default Carrinho;
