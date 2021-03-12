import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
  constructor() {
    super();

    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  addToLocalStorage() {
    const { itemCart } = this.props;
    const initialQuatity = { quant: 1 };
    const customID = { custom: `${itemCart.id}_${localStorage.length}` };
    localStorage.setItem(
      `${itemCart.id}_${localStorage.length}`,
      `${JSON.stringify({ ...customID, ...initialQuatity, ...itemCart })}`,
    );
  }

  render() {
    const { testId } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        onClick={ this.addToLocalStorage }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  itemCart: PropTypes.shape().isRequired,
  testId: PropTypes.string.isRequired,
};

export default AddToCart;
