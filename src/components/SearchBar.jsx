import React from 'react';
import ProductCard from './ProductCard';
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  apiSearch() {
    const { search } = this.state;
    api.getProductsFromQuery(search)
      .then((response) => this.setState({ result: response.results }));
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
          name="search"
        />

        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.apiSearch() }
        >
          Buscar
        </button>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductCard products={ result } />
      </div>
    );
  }
}

export default SearchBar;
