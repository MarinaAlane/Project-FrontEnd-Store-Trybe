import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        <input type="text" className="search-bar" />
        <p data-testid="home-initial-message" className="product-list-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductList;
