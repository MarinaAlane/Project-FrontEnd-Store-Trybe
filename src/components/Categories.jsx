import React from 'react';
import * as api from '../services/api';
import '../categories.css';

class Categories extends React.Component {
  constructor() {
    super();
    this.inputRadioCreator = this.inputRadioCreator.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchProductsCategories();
  }

  async fetchProductsCategories() {
    const categoriesFetched = await api.getCategories();
    this.setState({ categories: categoriesFetched });
  }

  inputRadioCreator() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <aside className="categories-list">
        {categories
          .map((element) => (
            <button type="button" key={ element.id } data-testid="category" className="category">
              {element.name}
            </button>
          ))}
      </aside>
    );
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        {categories.length < 1 ? <span>Loading...</span> : this.inputRadioCreator()}
      </div>
    );
  }
}

export default Categories;
