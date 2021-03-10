import React, { Component } from 'react';
import * as api from '../services/api';
import CategoriesCheckBox from './categoriesCheckBox';

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categoriesValue) => this.setState({ productsCategories: categoriesValue }));
  }

  render() {
    const { productsCategories } = this.state;

    return (
      <div>
        <ul>
          {productsCategories.map((category) => (
            <CategoriesCheckBox key={ category.name } category={ category } />
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
