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
    console.log(item);
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ this.addToLocalStorage }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  itemCart: Proptypes.shape().isRequired,
};

export default AddToCart;
