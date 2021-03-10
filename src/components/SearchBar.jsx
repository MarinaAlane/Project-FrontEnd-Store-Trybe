import React from 'react';
import * as api from '../services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.apiSearch = this.apiSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      result: [],
      search: '',
    };
  }

  componentDidMount() {
  }

  handleChange({ target }) {
    // função para colocar no onChange do input e alterar o search do state
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  apiSearch() {
    // verificar o que está no search
    // insere na requisição
    api.getProductsFromQuery().then();
    // atualizar o state
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ handleChange() }
          name="search"
        />

        <button
          type="button"
          data-testid="query-button"
          onClick={ console.log('xablauuuu') }
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
