import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

class ShoppingCartButton extends React.Component {
  render() {
    const { idProduct, idCategory } = this.props;
    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart', state: { idProduct, idCategory } } }
          data-testid="shopping-cart-button"
        >
          <button type="button">CARRINHO</button>
        </Link>
      </div>
    );
  }
}

ShoppingCartButton.propTypes = {
  idProduct: string,
  idCategory: string,
};

ShoppingCartButton.defaultProps = {
  idCategory: '',
  idProduct: '',
};

export default ShoppingCartButton;
