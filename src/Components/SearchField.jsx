import React, { Component } from 'react';
import ButtonCart from './ButtonCart';
import * as api from '../services/api';
import ItemCard from './ItemCard';

class SearchField extends Component {
  constructor() {
    super();
    this.searchTermChange = this.searchTermChange.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.state = {
      searchTerm: '',
      matchItens: [],
    };
  }

  componentDidMount() {
    this.handleMatch();
  }

  componentDidUpdate() {
    this.handleMatch();
  }

  async handleMatch() {
    const { searchTerm } = this.state;
    const requestItens = await api.getProductsFromTerm(searchTerm);
    console.log(requestItens);
    this.setState({
      matchItens: requestItens,
    });
  }

  searchTermChange({ target }) {
    this.setState({
      searchTerm: target.value,
    });
  }

  searchResults() {
    const { matchItens, searchTerm } = this.state;
    if (!searchTerm) {
      return <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>;
    }
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
    return (
      <div data-testid="home-initial-message">
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.searchTermChange }
        />
        {/* <button type="submit" onClick={ this.searchResults }>Pesquisar</button> */}
        <ButtonCart />
        {this.searchResults()}
      </div>
    );
  }
}

export default SearchField;
