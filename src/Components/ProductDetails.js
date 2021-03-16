import React from 'react';
import ButtonCart from './ButtonCart';
// import * as api from '../services/api';
// import Proptypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    console.log(especificObj);
    return (
      <div>
        <h1 data-testid="product-detail-name">title</h1>
        <img src="thumbnail" alt="imagem do produto" />
        <p>{`R$ ${price}` }</p>
        <p>Especificações técnicas:</p>
        <ButtonCart />
      </div>
    );
  }
}

export default ProductDetails;
