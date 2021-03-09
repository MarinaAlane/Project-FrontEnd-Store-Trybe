import React, { Component } from 'react';
import CategoriesList from './CategoriesList';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList />
      </div>
    );
  }
}
