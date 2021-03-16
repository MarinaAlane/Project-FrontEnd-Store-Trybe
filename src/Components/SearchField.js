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
      sucess: true,
    };
  }

  async onClickSearch() {
    const { searchTerm } = this.state;
    const requestItens = await api.getProductsFromCategoryAndQuery('', searchTerm);
    this.setState({ matchItens: requestItens.results });
    if (requestItens.results.length === 0) {
      this.setState({ sucess: false });
    } else this.setState({ sucess: true });
  }

  searchTermChange({ target }) {
    this.setState({
      searchTerm: target.value,
    });
  }

  searchResults() {
    const { matchItens, sucess } = this.state;
    if (matchItens.length > 0) {
      return (matchItens.map((matchItem, index, arrayOfProducts) => (
        <ItemCard
          key={ matchItem.id }
          productObj={ matchItem }
          productArray={ arrayOfProducts }
        />
      )));
    } if (!sucess) {
      return <div>Nenhum produto foi encontrado</div>;
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div data-testid="home-initial-message">
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.searchTermChange }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.onClickSearch }
        >
          Pesquisar
        </button>
        <ButtonCart />
        <div>
          {!searchTerm
          && <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>}
          {this.searchResults()}
        </div>
        <ListCategorie />
      </div>
    );
  }
}

export default SearchField;
