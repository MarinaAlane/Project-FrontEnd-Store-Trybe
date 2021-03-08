import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      searchItem: "",
    };
  }

  async function fetchItems({ target }) {
    const retrievedItems = await 
  }

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
