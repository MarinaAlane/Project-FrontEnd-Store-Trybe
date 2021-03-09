import React from 'react';
// import * as api from './services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleClick({ target }) {
  // }

  render() {
    return (
      <nav>
        <input type="text" />
        <button type="button" onClick={ this.handleClick }>Buscar</button>
      </nav>
    );
  }
}

export default SearchBar;
