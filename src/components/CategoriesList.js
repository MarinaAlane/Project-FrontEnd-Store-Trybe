import React, { Component } from 'react';
import * as Api from '../services/api';

export default class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  async getCategoriesFromApi() {
    const response = await Api.getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          { categories.map((category) => (
            <li
              key={ category.id }
              data-testid="category"
            >
              { category.name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
