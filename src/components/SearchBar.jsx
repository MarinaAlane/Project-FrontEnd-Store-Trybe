import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="search-bar" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </div>
    );
  }
}

export default SearchBar;
