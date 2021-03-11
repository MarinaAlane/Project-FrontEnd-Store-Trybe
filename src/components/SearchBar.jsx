import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { searchText, result, search, textChange } = this.props;
    return (
      <>
        <form action="">
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ textChange }
            id=""
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ search }
          >
            Pesquisar!
          </button>
        </form>
        {result.map(({ id, title, thumbnail, price }) => (
          <ItemCard
            key={ id }
            id={ id }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />
        ))}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

SearchBar.propTypes = {
  result: PropTypes.arrayOf(Object).isRequired,
  searchText: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  textChange: PropTypes.func.isRequired,
};

export default SearchBar;
