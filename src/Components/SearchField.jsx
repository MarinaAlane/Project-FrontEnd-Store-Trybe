import React, { Component } from 'react';
import ButtonCart from './ButtonCart';
import * as api from '../services/api';
import ItemCard from './ItemCard';
import ListCategorie from './ListCategorie';

class SearchField extends Component {
  constructor() {
    super();
    this.searchTermChange = this.searchTermChange.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
    this.state = {
      searchTerm: '',
      matchItens: [],
      onSearch: false,
    };
  }

  componentDidMount() {
    this.handleMatch();
  }

  async handleMatch() {
    const { searchTerm } = this.state;
    const requestItens = await api.getProductsFromTerm(searchTerm);
    this.setState({
      matchItens: requestItens,
    });
  }

  onClickSearch() {
    this.handleMatch();
    this.setState({ onSearch: true });
  }

  searchTermChange({ target }) {
    this.setState({
      searchTerm: target.value,
    });
  }

  searchResults() {
    const { matchItens } = this.state;
    if (matchItens.length === 0) {
      return <div>Nenhum produto foi encontrado</div>;
    }
    return (
      matchItens.map(({ id, title, price, thumbnail }) => (
        <ItemCard key={ id } title={ title } price={ price } thumbnail={ thumbnail } />
      ))
    );
  }

  render() {
    const { onSearch } = this.state;
    return (
      <div data-testid="home-initial-message">
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.searchTermChange }
        />
        <button
          type="submit"
          onClick={ this.onClickSearch }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <ButtonCart />
        <div className="item-container">
          {!onSearch
            ? <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
            : this.searchResults()}
        </div>
        <ListCategorie />
      </div>
    );
  }
}

export default SearchField;
