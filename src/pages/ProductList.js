import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from './CardProduct';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      query: '',
    };
    this.onInputUpdate = this.onInputUpdate.bind(this);
  }

  getProducts(query) {
    const result = getProductsFromCategoryAndQuery(query, query);
    result.then(
      (res) => {
        this.setState((props) => {
          return {
            ...props,
            products: res.results,
          }
        });
      },
    );
  }

  onInputUpdate({ target }) {
    const { value } = target;
    this.setState((props) => {
      return {
        ...props,
        query: value,
      };
    });
  }

  render() {
    const { query, products } = this.state;
    return (
      <main>
        <header>
          <input value={ query } onChange={ this.onInputUpdate } data-testid="query-input" type="text" />
          <button
            data-testid="query-button"
            onClick={ () => this.getProducts(this.state.query) } >
              Buscar
          </button>
        </header>
        {
          products.length !== 0 ? products.map( (product) => {
            return (
              <CardProduct
                key={ product.id }
                title={ product.title }
                price={ product.price }
                image={ product.thumbnail }
              />
            )
          }) : (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
        }
        
        <div>
        
        </div>
      </main>
    );
  }
}

export default ProductList;
