import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './home.css';
import Product from '../components/Product';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      value: '',
      // categoryId: '',
      products: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.HandleClick = this.HandleClick.bind(this);
    this.fetchQuery = this.fetchQuery.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchQuery(categoryId, value) {
    api.getProductsFromCategoryAndQuery(categoryId, value)
      .then(({ results }) => this.setState({ products: results }));
  }

  fetchCategories() {
    api.getCategories().then((category) => this.setState({ categories: category }));
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
        <div>
          <ul>
            {(categories.length > 0) && (
              categories
                .map(({ id, name }) => <li key={ id } data-testid="category">{name}</li>)
            )}
          </ul>
        </div>
        <div>
          {/* {products.map(product => product.title)} */}
          {(products.length === 0) ? (<p>Nenhum produto encontrado</p>) : (
            products.map((product) => <Product key={ product.id } array={ product } />)
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
