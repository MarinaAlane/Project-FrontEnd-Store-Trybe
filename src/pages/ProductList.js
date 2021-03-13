import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductItem from './ProductItem';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
    };

    this.userInput = this.userInput.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
  }

  userInput({ target }) {
    const { value } = target;
    this.setState((props) => (
      {
        ...props,
        query: value,
      }
    ));
  }

  loadProducts() {
    const { query } = this.state;
    const result = Api.getProductsFromCategoryAndQuery(query, query);
    result.then(
      (res) => {
        console.log(res);
        this.setState((props) => ({
          ...res,
          products: res.results,
        }));
      },
    );
  }

  render() {
    const { query, products } = this.state;
    return (
      <main>
        <header>
          <input
            value={ query }
            onChange={ this.userInput }
            data-test-id="query-input"
            type="text"
          />
          <button data-testid="query-button" onClick={ this.loadProducts } type="button">
            Buscar
          </button>
        </header>
        {
          products.length !== 0 ? products.map((product) => (
            <ProductItem
              key={ product.id }
              title={ product.title }
              price={ product.price }
              image={ product.thumbnail }
            />
          )) : (
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          )
        }
      </main>
    );
  }
}

export default ProductList;
