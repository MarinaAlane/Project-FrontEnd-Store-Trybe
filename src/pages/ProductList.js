import React, { Component } from 'react';
import * as fetchAPI from '../services/api';
import CategoriesList from '../components/CategoriesList';

require('./ProductList.css');

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      categories: undefined,
    };
    // Bind methods
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    // Requisita categorias da API e atualiza state do componente
    const categories = await fetchAPI.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="ProductList">
        {
          categories
            // Se a requisição foi completada, renderiza CategoriesList
            ? <CategoriesList categories={ categories } />
            // Caso contrário, exibe a mensagem
            : <p className="CategoriesList">Carregando...</p>
        }
        <div className="SearchArea">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

export default ProductList;
