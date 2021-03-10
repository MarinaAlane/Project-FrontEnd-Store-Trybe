import React from 'react';

class ShoppingCartButton extends React.Component {
  constructor() {
    super();
    this.addItemToCart = this.addItemToCart.bind(this);
  };

  addItemToCart({ target }) {
    localStorage.setItem('item', target.value);
  }

  render() {
    const { productName, datatestid } = this.props;
    return (
      <div>
        <button
        data-testid={ datatestid }
        type="button"
        value={ productName }
        onClick={ this.addItemToCart }
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

export default ShoppingCartButton;
