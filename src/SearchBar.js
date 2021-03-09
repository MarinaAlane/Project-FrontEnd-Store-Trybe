import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // async function fetchItems({ target }) {}

  render() {
    return (
      <nav>
        <input type="text" />
        <button type="button">Buscar</button>
      </nav>
    );
  }
}

export default SearchBar;
