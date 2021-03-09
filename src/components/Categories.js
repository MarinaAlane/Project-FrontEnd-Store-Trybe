import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h1>Categorias</h1>
        <ul>
          {categories.map((catObj) => (
            <li
              key={ catObj.id }
              data-testid="category"
              name={ catObj.id }
            >
              { catObj.name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
