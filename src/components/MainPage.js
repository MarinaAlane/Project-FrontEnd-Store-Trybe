import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

import shoppingCartIcon from '../images/shopping_cart_black.svg';
import CardItem from './CardItem';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      items: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      searchBar: target.value,
    });
  }

  async handleButton() {
    const { searchBar } = this.state;
    const response = await getProductsFromCategoryAndQuery('', searchBar);
    this.setState({
      items: response.results,
    });
  }

  render() {
    const { searchBar, items } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            data-testid="query-input"
            value={ searchBar }
            onChange={ this.handleInput }
          />
          <button
            type="button"
            onClick={ this.handleButton }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartIcon } alt="Icone do Carrinho de Compras" />
        </Link>
        <div>
          <Categories />
        </div>
        <div>
          {items.length < 1
            ? <h3>Nenhum produto foi encontrado</h3>
            : items.map((obj) => <CardItem item={ obj } key={ obj.id } />)}
        </div>
      </div>
    );
  }
}

export default MainPage;
