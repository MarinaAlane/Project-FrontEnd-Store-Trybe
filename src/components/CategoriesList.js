import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
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
    const { handlerQueryByCategory } = this.props;
    return (
      <div>
        <ul>
          { categories.map((category) => (
            <Link
              to="/"
              key={ category.id }
              onClick={ () => handlerQueryByCategory(category.id) }
            >
              <li
                key={ category.id }
                data-testid="category"
              >
                { category.name }
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  handlerQueryByCategory: func.isRequired,
};
