import React, { Component } from 'react';
import * as marketAPI from '../services/api';

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
    const categories = marketAPI.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const categoriesList = categories.map(({ name }, index) => <li key={ index } data-testid="category">{name}</li>);
    console.log(categories);
    return (
      <aside>
        <ul>
          {categoriesList}
        </ul>
      </aside>
    );
  }
}

export default AsideCategoriesList;
