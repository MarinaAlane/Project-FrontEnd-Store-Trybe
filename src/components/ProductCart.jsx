import React from 'react';
import propTypes from 'prop-types';

class ProductCart extends React.Component {
  render() {
    const { eachProduct } = this.props;
    const { title, price, quantity, thumbnail } = eachProduct;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <p>{ price }</p>
        <input
          type="number"
          data-testid="shopping-cart-product-quantity"
          value={ quantity }
        />
        <img src={ thumbnail } alt={ title } />
        <hr />
      </div>
    );
  }
}
ProductCart.propTypes = {
  eachProduct: propTypes.shape({
    title: propTypes.string,
    price: propTypes.number,
    quantity: propTypes.number,
    thumbnail: propTypes.string,
  }),
}.isRequired;

export default ProductCart;
