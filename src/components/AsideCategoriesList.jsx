import React, { Component } from 'react';
import * as marketAPI from '../services/api';
import './AsideCategoriesList.css';

class AsideCategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.loadCategories = this.loadCategories.bind(this);
  }

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories() {
    marketAPI.getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const categoriesList = categories
      .map(({ name }, index) => <li key={ index } data-testid="category">{name}</li>);
    return (
      <div className="d-flex">
        <aside className="aside categories-list">
          Categorias:
          <ul>
            {categoriesList}
          </ul>
        </aside>
      </div>
    );
  }
}

export default AsideCategoriesList;
