import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Categories from './Categories';
import Products from './Products';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedProducts: undefined,
      categoryId: '',
    };
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  onRadioChange({ target }) {
    const { id } = target;
    this.setState({ categoryId: id });
  }

  async getProducts() {
    const searchInput = document.querySelector('.searchInput').value;
    const { categoryId } = this.state;
    const productsArray = await getProductsFromCategoryAndQuery(categoryId, searchInput);
    this.setState({
      selectedProducts: productsArray,
    });
  }

  async getCategoriesApi() {
    const arrayCategories = await getCategories();
    this.setState({
      categories: arrayCategories,
    });
  }

  render() {
    const message = (
      <h5
        data-testid="home-initial-message"
        className="defaultMessage"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h5>
    );
    const { categories, selectedProducts } = this.state;
    console.log(selectedProducts);
    return (
      <div>
        <input type="text" className="searchInput" data-testid="query-input" />
        { message }
        <button data-testid="query-button" type="button" onClick={ this.getProducts }>
          Pesquisar
        </button>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="button-link"
        >
          Botão
        </Link>
        {
          categories.map(({ id, name }) => (
            <Categories
              onChange={ this.onRadioChange }
              key={ id }
              name={ name }
              id={ id }
            />))
        }
        {
          !selectedProducts ? <p>Nenhum Produto Encontrado</p>
            : (selectedProducts.results.map((product) => (
              <Products product={ product } key={ product.id } />
            )))
        }
      </div>
    );
  }
}
export default Home;
