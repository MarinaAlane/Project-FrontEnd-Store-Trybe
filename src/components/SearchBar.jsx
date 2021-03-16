import React from 'react';
import { Link } from 'react-router-dom';
import shopCart from '../images/shopCart.png';
import ListCategories from './ListCategories';

import * as api from '../services/api';
import CreateCard from './CreateCard';
import AddButton from './AddButton';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: '',
      getQuery: '',
      getCategory: '',
    };

    this.getQuery = this.getQuery.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.blankField = this.blankField.bind(this);
    this.createCards = this.createCards.bind(this);
    this.requestListByCategory = this.requestListByCategory.bind(this);
  }

  componentDidMount() {
    this.requestList();
  }

  // Altera o estado de search para o valor contido na searchBar
  async getQuery(event) {
    await this.setState({
      getQuery: event.target.value,
    });
    // console.log(this.state.getQuery);
  }

  async getCategory(event) {
    await this.setState({
      getCategory: event.target.value,
    });
  }

  async requestList() {
    const { getCategory, getQuery } = this.state;
    const reqList = await api.getProductsFromCategoryAndQuery(getCategory, getQuery);
    this.setState({
      productList: reqList,
    });
    localStorage.setItem('productObj', JSON.stringify(reqList));
    this.createCards();
  }

  async requestListByCategory() {
    const { getCategory } = this.state;
    // console.log(this.state.getCategory);
    const reqList = await api.getProductsFromCategory(getCategory);
    this.setState({
      productList: reqList,
    });
    console.log(reqList);
    localStorage.setItem('productCategObj', JSON.stringify(reqList));
  }

  blankField() {
    return (
      <p className="alert-message">Nenhum produto foi encontrado</p>
    );
  }

  createCards() {
    const { productList } = this.state;
    return (
      !productList ? this.blankField()
        : productList.results.map((product) => (
          <div className="card" key={ product.id }>
            <CreateCard product={ product } />
            <AddButton product={ product } />
          </div>))
    );
  }

  render() {
    return (
      <div className="master-container">
        <div className="content-category">
          <ListCategories fnc={ this.getCategory } />
        </div>

        <div className="main">
          <div className="header">
            <input
              data-testid="query-input"
              type="text"
              className="search-bar-main"
              onChange={ this.getQuery }
            />

            <button
              className="btn-search"
              data-testid="query-button"
              type="button"
              onClick={ () => this.requestList() }
            >
              Pesquisar
            </button>
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
                src={ shopCart }
                alt="Imagem do carrinho de compras"
                className="shop-cart-main"
              />
            </Link>
          </div>

          <h4 data-testid="home-initial-message" className="message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>

          <div className="card-container">
            { this.createCards() }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
