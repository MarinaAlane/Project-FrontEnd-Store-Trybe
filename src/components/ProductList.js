import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import '../App.css';
import ProductItem from './ProductItem';
import CategoryList from './CategoryList';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      json: undefined,
      searchText: '',
      categories: [],
      selectedCategories: null,
    };

    this.changeText = this.changeText.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.LoadCategories = this.LoadCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.clickCategory = this.clickCategory.bind(this);
  }

  componentDidMount() {
    this.LoadCategories();
  }

  async handleSearch() {
    const { searchText } = this.state;
    console.log(this.state);
    this.setState({ loading: true });
    console.log(this.state);
    const SearchJson = await Api
      .getProductsFromCategoryAndQuery('book', searchText);
    console.log(SearchJson);
    this.setState({
      loading: false,
      json: SearchJson,
    });
    console.log(this.state);
  }

  async clickCategory({ target }) {
    const teste = await Api.getProductsFromCategoryAndQuery(target.id, this.state.searchText);
    return teste
  }

  async LoadCategories() {
    const allCategories = await Api
      .getCategories();
    this.setState({
      categories: allCategories,
      loading: false,
    });
  }

  changeText({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  renderProducts(json) {
    if (!json) return;
    const { results } = json;
    return (
      <section className="product-list">
        {results.length === 0
          ? <span>Nenhum produto foi encontrado</span>
          : results
            .map((product) => <ProductItem key={ product.id } product={ product } />)}
      </section>
    );
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <section className="category-list">
        {categories.length === 0
          ? <span>Nenhuma categoria foi encontrada</span>
          : categories
            .map((category) => (
              <CategoryList key={ category.id } name={ category.name } category={ category.id } clickCategory={ this.clickCategory } />
              ))}
      </section>
    );
  }

  render() {
    const { loading, json } = this.state;
    const checkLoading = loading ? <p>Loading...</p> : this.renderProducts(json);
    return (
      <div className="home">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.changeText }
        />
        <button
          type="button"
          onClick={ this.handleSearch }
          data-testid="query-button"
        >
          Search
        </button>
        <div className="home-results">
          <Link to="/cart" data-testid="shopping-cart-button">CARRINHO</Link>
          <span
            data-testid="home-initial-message"
            className="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          { this.renderCategories() }
          { checkLoading }
        </div>
      </div>
    );
  }
}

export default ProductList;
