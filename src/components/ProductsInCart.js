import React from 'react';


class ProductsInCart extends React.Component {
  render() {
    let total = 25;
    return(
      <div>
        <ul>
          <li>teste</li>
        </ul>
        <p>Valor Total da Compra: <span>{`R$ ${total}`}</span></p>
        <button>Finalizar Compra</button>
      </div>
    );
  }
}

export default ProductsInCart;
