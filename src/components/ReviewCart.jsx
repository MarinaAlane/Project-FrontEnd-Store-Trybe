import React, { Component } from 'react';

class ReviewCart extends Component {
  constructor() {
    super();
    this.renderCartItems = this.renderCartItems.bind(this);
    // this.sumCalculation = this.sumCalculation.bind(this);
  }

  // sumCalculation() {
  //   const productsPrices = document.querySelectorAll('.product-price');
  //   const productsQuantities = document.querySelectorAll('.product-quantity');
  //   // const test = Object.keys(productsPrices).map(({ innerText }) => JSON.parse(innerText));
  //   // console.log(test);
  //   console.log(productsQuantities);
  //   // const finalValue = productsPrices.map((price)=>{

  //   // });
  // }

  renderCartItems() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));
    const cartItens = keys.map((key) => {
      const item = JSON.parse(localStorage.getItem(key));
      return (
        <div key={ item.custom }>
          <img src={ item.thumbnail } alt={ item.title } />
          <p data-testid="shopping-cart-product-name">{ item.title }</p>
          <p className="product-price">{ item.price }</p>
          <p className="product-quantity">{ item.quant }</p>
        </div>
      );
    });
    return cartItens;
  }

  render() {
    return (
      <section>
        {this.renderCartItems()}
        {/* {this.sumCalculation()} */}
      </section>
    );
  }
}

export default ReviewCart;
