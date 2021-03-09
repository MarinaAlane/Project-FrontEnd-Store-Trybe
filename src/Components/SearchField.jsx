import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';

class SearchField extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input
          type="text"
        />
        <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
      </div>
    );
  }
}

export default SearchField;
