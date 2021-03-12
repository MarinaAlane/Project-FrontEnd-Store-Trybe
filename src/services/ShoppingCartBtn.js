import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class ShoppingCartBtn extends React.Component {
  render() {
    const { shoppingCartList } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shoppingcart',
            state: { shoppingCartList },
          } }
          data-testid="shopping-cart-button"
        >
          <button type="button">
            CARRINHO
          </button>
        </Link>
      </div>
    );
  }
}

ShoppingCartBtn.propTypes = {
  shoppingCartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCartBtn;
