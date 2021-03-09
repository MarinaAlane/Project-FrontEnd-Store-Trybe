import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `foto-${title}` } />
        <p>{ price }</p>
      </div>
    );
  }
}

export default ProductCard;