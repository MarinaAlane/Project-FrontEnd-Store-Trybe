import React, { Component } from 'react';
import * as api from '../services/api';

class ListCategorie extends Component {
  constructor() {
    super();
    this.SearchCategorie = this.SearchCategorie.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.SearchCategorie();
  }

  SearchCategorie() {
    api.getCategories().then((cat) => this.setState({
      categories: cat,
    }));
  }

  render() {
    const { categories } = this.state;
    if (categories.length === 0) return <h1>carregando</h1>;

    return (
      <ol>
        {categories.map((categorie, index) => (
          <li
            data-testid="category"
            key={ index }
          >
            { categorie.name }
          </li>
        ))}
      </ol>
    );
  }
}

export default ListCategorie;
