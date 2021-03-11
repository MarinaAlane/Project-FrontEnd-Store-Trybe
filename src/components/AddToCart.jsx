import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddToCart extends Component {
  constructor() {
    super();

    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  addToLocalStorage() {
    const { itemCart } = this.props;
    const item = itemCart;
    localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item));
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
  itemCart: Proptypes.shape().isRequired,
  testId: Proptypes.string.isRequired,
};

export default AddToCart;
