import React, { Component } from 'react';
import SearchForTerms from '../SearchBarForTerms/SearchForTerms';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.getInputState = this.getInputState.bind(this);
  }

  getInputState({ target }) {
    const { onInputChange } = this.props;
    onInputChange(target.value);
  }

  render() {
    return (
      <nav>
        <input onChange={ this.getInputState } data-testid="query-input" type="text" />
        <button data-testid="query-button" type="button">Buscar</button>
        <SearchForTerms />
      </nav>
    );
  }
}

export default SearchBar;
