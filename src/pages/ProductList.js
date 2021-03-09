import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <main>
        <header>
          <input type="text" />
        </header>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default ProductList;
