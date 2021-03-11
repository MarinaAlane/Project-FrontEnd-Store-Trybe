import React, { Component } from 'react';
import * as fetchAPI from '../services/api';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';
import NoSearchText from '../components/NoSearchText';
import LoadingMsg from '../components/LoadingMsg';
import SearchResults from '../components/SearchResults';

require('./ProductList.css');

export default class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      categories: '',
      search: '',
      results: [],
    };
    // Bind methods
    this.fetchCategories = this.fetchCategories.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async submitSearch() {
    this.setState({ loading: true });

    const { search, categories } = this.state;
    const { results } = await fetchAPI
      .getProductsFromCategoryAndQuery(categories, search);

    this.setState({
      results,
      loading: false,
    });
  }

  updateSearchValue(event) {
    const { value: search } = event.target;
    this.setState({ search });
  }

  async fetchCategories() {
    // Requisita categorias da API e atualiza state do componente
    const categories = await fetchAPI.getCategories();
    this.setState({ categories });
  }

  render() {
    const { results, loading, categories } = this.state;

    return (
      <div className="ProductList">
        {
          categories
            // Se a requisição foi completada, renderiza CategoriesList
            ? <CategoriesList categories={ categories } />
            // Caso contrário, exibe a mensagem
            : <LoadingMsg />
        }
        <div className="SearchArea">
          <div>
            <SearchBar
              textInputCallback={ this.updateSearchValue }
              submitCallback={ this.submitSearch }
            />
            { results.length === 0 && !loading
              ? <NoSearchText />
              : <SearchResults loading={ loading } results={ results } />
            }
          </div>
        </div>
      </div>
    );
  }
}
