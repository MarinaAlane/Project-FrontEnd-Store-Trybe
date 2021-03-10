import React, { Component } from 'react';
import * as fetchAPI from '../services/api';

export default class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      categories: '',
      search: '',
      itens: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getItem = this.getItem.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      search: value,
    });
  }

  async getItem() {
    this.setState({
      loading: true,
    });

    const { search, categories } = this.state;
    const resultFet = await fetchAPI.getProductsFromCategoryAndQuery(categories, search);

    const { results } = resultFet;
    this.setState({
      itens: results,
      loading: false,
    });
  }

  inputSearch() {
    return (
      <input
        id="Search-input"
        type="text"
        placeholder="Exemplo"
        onChange={ this.handleChange }
        data-testid="query-input"
      />
    );
  }

  bntSearch() {
    return (
      <button
        type="submit"
        onClick={ this.getItem }
        data-testid="query-button"
      >
        Buscar
      </button>
    );
  }

  elementCard(element) {
    const { title, thumbnail, price, id } = element;

    return (
      <div key={ id } data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }

  render() {
    const { itens, loading } = this.state;

    if (loading) return <p>Carregando...</p>;

    return (
      <div className="SearchArea">
        { this.inputSearch() }
        { this.bntSearch() }
        { itens.map((item) => this.elementCard(item)) }
      </div>
    );
  }
}
