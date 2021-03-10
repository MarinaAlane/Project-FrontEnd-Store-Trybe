import React from 'react';
import * as api from '../services/api';
import CardList from '../Components/CardList';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.getCat = this.getCat.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.renderCard = this.renderCard.bind(this);

    this.state = {
      products: [],
      searchText: '',
      cardList: false,
      digite: true,
    };
  }

  getCat(value) {
    api.getProductsFromCategoryAndQuery('MLB1403', value)
      .then(({ results }) => {
        this.setState({
          products: results,
          cardList: true,
        });
      });
  }

  searchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  renderCard() {
    const { searchText } = this.state;
    this.getCat(searchText);
    this.setState({
      digite: false,
    });
  }

  render() {
    const { searchText, products, cardList, digite } = this.state;

    return (
      <div data-testid="home-initial-message">
        <div>
          <label htmlFor="searchtext">
            <input
              type="text"
              id="searchText"
              name="searchText"
              value={ searchText }
              onChange={ this.searchTextChange }
              data-testid="query-input"
            />
          </label>
          <input
            type="button"
            data-testid="query-button"
            value="Buscar"
            onClick={ this.renderCard }
          />
        </div>
        { digite && <p>Digite algum termo de pesquisa ou escolha uma categoria.</p> }
        { cardList && <CardList products={ products } /> }
      </div>
    );
  }
}

export default Search;
