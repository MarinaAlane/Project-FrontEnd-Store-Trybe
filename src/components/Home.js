import React from 'react';

import { Link } from 'react-router-dom';

import Categories from './Categories';
import SearchCard from './SearchCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchbar: '',
      response: [],
      emptyResponse: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { searchbar } = this.state;
    getProductsFromCategoryAndQuery(undefined, searchbar).then(({ results }) => {
      if (searchbar.length > 0 && results.length === 0) {
        this.setState({
          emptyResponse: true,
        });
      } else {
        this.setState({
          emptyResponse: false,
          response: results,
        });
      }
    });
  }

  render() {
    const { response, emptyResponse } = this.state;
    return (
      <>
        <section>
          <input
            data-testid="query-input"
            onChange={ (event) => this.setState({
              searchbar: event.target.value,
            }) }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <Link data-testid="shopping-cart-button" to="/components/carrinho">
            <i className="fas fa-shopping-cart" />
          </Link>
        </section>
        <section>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <SearchCard result={ response } response={ emptyResponse } />
        </section>
      </>
    );
  }
}

export default Home;
