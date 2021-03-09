import React from 'react';
import Categorias from './Categorias';
import * as api from './services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.categoriesFetch = this.categoriesFetch.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesFetch();
  }

  async categoriesFetch() {
    const results = await api.getCategories();
    this.setState({
      categories: results,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <label htmlFor="Digite" data-testid="home-initial-message">
          <input />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Categorias categories={ categories } />
      </section>
    );
  }
}

export default Home;
