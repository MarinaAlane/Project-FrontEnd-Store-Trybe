import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductItem from './ProductItem';
import Categories from './Categories';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
      category: '',
    };

    this.userInput = this.userInput.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
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
        this.setState(() => ({
          ...res,
          products: res.results,
        }));
      },
    );
  }

  async filterCategory({ target: { id } }) {
    const { query } = this.state;
    const productsFromCategory = await Api.getProductsFromCategoryAndQuery(id, query);
    console.log(productsFromCategory.results);
    this.setState({
      products: productsFromCategory.results,
      category: id,
    });
  }

  render() {
    const { query, products } = this.state;
    console.log(products);
    return (
      <div>
        <aside>
          <Categories onChange={ this.filterCategory } />
        </aside>
        <main>
          <header>
            <input
              value={ query }
              onChange={ this.userInput }
              data-testid="query-input"
              type="text"
            />
            <button
              data-testid="query-button"
              onClick={ this.loadProducts }
              type="button"
            >
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
                id={ product.id }
              />
            )) : (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          }
        </main>
      </div>
    );
  }
}

export default ProductList;
