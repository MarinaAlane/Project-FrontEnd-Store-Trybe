import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() { this.fetchCategories(); }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  mapCategory() {
    const { categories } = this.state;
    return categories.map(
      ({ id, name }) => <li key={ id } data-testid="category" id={ id }>{name}</li>,
    );
  }

  render() {
    return (
      <div>
        <aside>
          <ul>
            { this.mapCategory() }
          </ul>
        </aside>
        <input type="text" placeholder="Digite aqui" />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </div>
    );
  }
}

export default App;
