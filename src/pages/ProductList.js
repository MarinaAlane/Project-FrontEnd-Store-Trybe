import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      query: '',
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.onInputUpdate = this.onInputUpdate.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categoriesResponse = await Api.getCategories();

    this.setState({ categories: categoriesResponse });
  }

  getProducts(query) {
    const result = Api.getProductsFromCategoryAndQuery(query, query);
    result.then(
      (res) => {
        this.setState((props) => ({
          ...props,
          products: res.results,
        }));
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
    const { query, products, categories } = this.state;

    return (
      <main>
        <header>
        <input
          value={ query }
          onChange={ this.onInputUpdate }
          data-testid="query-input"
          type="text"
        />
          <button
            data-testid="query-button"
            onClick={ () => this.getProducts(this.state.query) } >
              Buscar
          </button>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </header>

        <aside>
          <span>Categorias:</span>
          {categories.map((category) => (
            <div key={ category.id }>
              <label
                data-testid="category"
                htmlFor={ `${category.name}-checkbox` }
              >
                <input id={ `${category.name}-checkbox` } type="checkbox" />
                { category.name }
              </label>
            </div>
          ))}
        </aside>
        
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
        
      </main>
    );
  }
}

export default ProductList;
