import React, { Component } from 'react';
import ButtonCart from './ButtonCart';
import ListCategorie from './ListCategorie'

class SearchField extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input
          type="text"
        />
        <ButtonCart />
        <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
        <ListCategorie />
      </div>
    );
  }
}

export default SearchField;
