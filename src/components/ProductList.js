import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: false,
      search: '',
      itens: [],
    };

    this.getItem = this.getItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      search: value,
    });
  }

  async getItem() {
    this.setState({
      loading: true,
    });

    const { search, categories } = this.state;
    const resultFetch = await Api.getProductsFromCategoryAndQuery(categories, search);

    const { results } = resultFetch;

    this.setState({
      itens: results,
      loading: false,
    });
  }

  searchInput() {
    return (
      <input
        id="search-input"
        type="text"
        onChange={ this.handleChange }
        data-testid="query-input"
        placeholder="Procurar Produto"
      />
    );
  }

  searchButton() {
    return (
      <button
        type="submit"
        onClick={ this.getItem }
        data-testid="query-button"
      >
        Pesquisar
      </button>
    );
  }

  productCard(element) {
    const { title, thumbnail, price, id } = element;

    return (
      <div key={ id } data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }

  async fetchCategories() {
    const responseCategorie = await Api.getCategories();

    this.setState({ categories: responseCategorie });
  }

  render() {
    const { categories, itens, loading } = this.state;

    if (loading) return <h1>Carregando...</h1>;

    return (
      <main>
        <nav>
          <input type="text" />
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </nav>
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
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="search">
          { this.searchInput() }
          {this.searchButton() }
          { itens.map((item) => this.productCard(item))}
        </div>
      </main>
    );
  }
}

export default ProductList;
