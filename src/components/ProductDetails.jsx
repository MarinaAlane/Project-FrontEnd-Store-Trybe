import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    console.log(product);
    return (
      <div data-testid="product-detail-name">
        Imagem aqui
        {/* <img src={  } /> */}
        <h1>Nome do produto aqui</h1>
        <p>R$ 0.00</p>
        {/* {product.attributes.map((attribute, index) => (<p key={index}>{attribute}</p>))} */}
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

// ProductDetails.propTypes = {
//   title: string,
//   thumbnail: string,
//   price: string,
//   attributes: arrayof,
// }.isRequired;

export default ProductDetails;
