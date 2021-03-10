import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      categories: [],
      productsInput: '',
      categoriesInput: '',
      loaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSearchResult = this.checkSearchResult.bind(this);
  }

  componentDidMount() { this.fetchCategories(); }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { productsInput, categoriesInput } = this.state;
    api.getProductsFromCategoryAndQuery(categoriesInput, productsInput)
      .then((products) => this.setState({
        productList: products.results,
        loaded: true,
      }));
  }

  checkSearchResult() {
    const { productList, loaded } = this.state;
    if (productList <= 0 && loaded) {
      return (
        <h3>Nenhum produto foi encontrado</h3>
      );
    }
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  mapCategory() {
    const { categories, categoriesInput } = this.state;
    return categories.map(
      ({ id, name }) => (
        <label key={ id } data-testid="category" htmlFor={ id }>
          <input
            type="checkbox"
            name="categoriesInput"
            id={ id }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value={ name }
            checked={ categoriesInput === name }
          />
          { name }
        </label>
      ),
    );
  }

  renderProductList() {
    const { productList } = this.state;
    return (
      productList.map(({ id, title, price, thumbnail }) => (
        <div key={ id } data-testid="product">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
          <Link data-testid="product-detail-link" to={ `/productdetails/${id}` }>
            Detalhes do Produto
          </Link>

        </div>
      ))
    );
  }

  render() {
    const { productsInput, productList } = this.state;
    return (
      <div>
        <aside>
          <div>
            { this.mapCategory() }
          </div>
        </aside>
        <Link to="/shoppingCart">
          <button type="button" data-testid="shopping-cart-button">ShoppingCart</button>
        </Link>

        <input
          type="text"
          placeholder="Digite aqui"
          value={ productsInput }
          onChange={ this.handleChange }
          data-testid="query-input"
          name="productsInput"
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Pesquise o Produto
        </button>

        {
          (productList.length > 0)
            ? this.renderProductList() : this.checkSearchResult()
        }

      </div>
    );
  }
}

export default Home;
