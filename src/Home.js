import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Categories from './Categories';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedProducts: [],
    };
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  async getCategoriesApi() {
    const arrayCategories = await getCategories();
    this.setState({
      categories: arrayCategories,
    });
  }

  async getProducts() {
    const searchInput = document.querySelector('.searchInput').value;
    const radioAll = document.querySelectorAll('.cat-radio');
    const radioArray = radioAll.entries();
    console.log(radioArray);
    const idCategory = (radioArray.find((radio) => radio.checked === true)).id;
    const productsArray = await getProductsFromCategoryAndQuery(idCategory, searchInput);
    this.setState({
      selectedProducts: productsArray,
    });
  }

  render() {
    console.log(this.state);
    const message = (
      <h5
        data-testid="home-initial-message"
        className="defaultMessage"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h5>
    );
    const { categories } = this.state;
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
            <Categories key={ id } name={ name } id={ id } />))
        }
      </div>
    );
  }
}
export default Home;
