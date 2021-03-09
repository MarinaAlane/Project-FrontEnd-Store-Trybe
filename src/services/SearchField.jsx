import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class SearchField extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <input
            data-testid="home-initial-message"
            type="text"
          />
          <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default SearchField;
