import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';

class Home extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="pesquisar" data-testid="home-initial-message">
            <input name="pesquisar" type="text" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button"> Cart </Link>
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
