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

    this.onInputUpdate = this.onInputUpdate.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  onInputUpdate({ target }) {
    const { value } = target;
    this.setState((props) => (
      {
        ...props,
        query: value,
      }
    ));
  }

  getProducts() {
    const { query } = this.state;
    const result = Api.getProductsFromCategoryAndQuery(query, query);
    result.then(
      (res) => {
        this.setState((props) => ({
          ...res,
          products: res.results,
        }));
      },
    );
  }

  render() {
    const { query, products } = this.state;
    console.log(products);
    return (
      <main>
        <header>
          <input
            value={query}
            onChange={this.onInputUpdate}
            data-test-id="query-input"
            type="text"
          />
          <button data-testid="query-button" onCLick={this.getProducts} type="button">
            Buscar
          </button>
        </header>
        {
          products.length !== 0 ? products.map((product) => (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.thumbnail}
            />
          )) : (
              <br>dummy tag</br>
          )
        }
      </main>
    );
  }
}

export default ProductList;
