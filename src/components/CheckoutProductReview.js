import React from 'react';

class CheckoutProductReview extends React.Component {
  constructor() {
    super();
    this.productCartReview = this.productCartReview.bind(this);
  }

  productCartReview() {
    const storedProducts = JSON.parse(localStorage.getItem('itens'));
    return (
      <div>
        <fieldset>
          <legend>Revise seus Produtos</legend>
          { storedProducts.map(((product) => (
            <div key={ `${product.id}` }>
              <img alt="Product" src={ product.thumbnail } />
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
              <p>{ product.price }</p>
            </div>
          ))) }
        </fieldset>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.productCartReview() }
      </div>
    );
  }
}

export default CheckoutProductReview;
