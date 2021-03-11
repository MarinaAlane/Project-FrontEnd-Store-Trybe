import React from 'react';

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <button data-testid="product-add-to-cart">
          Adiciona ao carrinho
        </button>
      </div>
    );
  }
}

export default AddButton;