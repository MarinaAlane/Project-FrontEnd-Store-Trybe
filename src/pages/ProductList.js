import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import CardProduct from '../components/ProductCard';
import CartButton from '../components/CartButton';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      query: '',
      categoryId: '',
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    if (target.type === 'radio') {
      this.setState((props) => ({
        ...props,
        categoryId: target.id,
      }));
    } else {
      const { value } = target;
      this.setState((props) => ({
        ...props,
        query: value,
      }));
    }
  }

  getProducts(categoryId) {
    const { query } = this.state;
    console.log(categoryId);
    const result = Api.getProductsFromCategoryAndQuery(categoryId, query);
    result.then((res) => {
      this.setState((props) => ({
        ...props,
        products: res.results,
      }));
    });
  }

  async fetchCategories() {
    const categoriesResponse = await Api.getCategories();

    this.setState({ categories: categoriesResponse });
  }

  render() {
    const { query, categories, products } = this.state;

    return (
      <main>
        <header>
          <input
            value={ query }
            onChange={ this.handleChange }
            data-testid="query-input"
            type="text"
          />
          <button
            data-testid="query-button"
            onClick={ this.getProducts }
            type="button"
          >
            Buscar
          </button>
          <CartButton />
        </header>

        <aside>
          <span>Categorias:</span>
          {categories.map((category) => (
            <div key={ category.id }>
              <label data-testid="category" htmlFor={ category.id }>
                <input
                  id={ category.id }
                  type="radio"
                  name="category"
                  onClick={ (event) => {
                    this.handleChange(event);
                    this.getProducts(category.id);
                  } }
                />
                { category.name }
              </label>
            </div>
          ))}
        </aside>

        {products.length !== 0 ? (
          products.map((product) => (
            <CardProduct key={ product.id } product={ product } />
          ))
        ) : (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </main>
    );
  }
}

export default ProductList;
