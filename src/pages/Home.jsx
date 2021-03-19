import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import saveProductLocalStorage from '../services/functions';
import * as functions from '../services/functions';
import './home.css';
import Product from '../components/Product';
import Category from '../components/Category';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      value: '',
      products: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
    this.fetchQuery = this.fetchQuery.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleCategory(NewCategory) {
    this.fetchQuery(NewCategory, '');
  }

  fetchQuery(categoryId, value) {
    api.getProductsFromCategoryAndQuery(categoryId, value)
      .then(({ results }) => this.setState({ products: results }));
  }

  async fetchCategories() {
    await api.getCategories().then((category) => this.setState({ categories: category }));
  }

  HandleChange(event) {
    this.setState({ value: event.target.value });
  }

  HandleClick() {
    const { value } = this.state;
    this.fetchQuery(null, value);
  }

  render() {
    const { products, categories } = this.state;

    return (
      <div>
        <header className="home-header">
          <input
            type="text"
            placeholder="Digite algum termo de pesquisa"
            data-testid="query-input"
            onChange={ this.HandleChange }
          />
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart" />
          </Link>
        </header>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.HandleClick }
        >
          pesquisar
        </button>
        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </main>
        <Category categories={ categories } handleCategory={ this.handleCategory } />
        <div>
          {(products.length === 0) ? (<p>Nenhum produto encontrado</p>) : (
            products.map((product) => (<Product
              key={ product.id }
              array={ product }
              saveProduct={ saveProductLocalStorage }
            />))
          )}
        </div>
      </div>
    );
  }
}
export default Home;

// // Estrutura para termo
// api.getProductsFromCategoryAndQuery(query, 'cinta')
// .then((search) => console.log(search))

// // Estrutura para id de categoria
// api.getProductsFromCategoryAndQuery('MLB1071')
//   .then((categoryID) => console.log(categoryID))

// // Estrutura para busca de id e termo
// api.getProductsFromCategoryAndQuery("MLB1540", 'cinta')
//   .then((categories) => console.log(categories))
