import React from 'react';

import * as api from './services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',

    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
 }

  async handleClick() {
    const { sentProducts } = this.props;
    const { inputValue } = this.state;
    const productsFromApi = await api.getProductsFromCategoryAndQuery('',inputValue);
    sentProducts(productsFromApi);

  }

  handleOnChange({ target }) {
    const { value } = target;
    this.setState({
      inputValue: value,

    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <nav>
        <input
          data-testid="query-input"
          type="text"
          value={ inputValue }
          name="searchBar"
          onChange={ this.handleOnChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }>Buscar</button>
      </nav>
    );
  }
}

export default SearchBar;
