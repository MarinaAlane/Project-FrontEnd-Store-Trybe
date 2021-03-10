import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allCategories: '', loading: true };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categoriesData = await api.getCategories();
    this.setState({
      allCategories: [...categoriesData],
      loading: false,
    });
  }

  render() {
    const { allCategories, loading } = this.state;
    if (loading) {
      return <p>Loading paragrafo</p>;
    }
    const categories = allCategories
      .map((category, index) => (
        <p key={ index } data-testid="category">
          {category.name}
        </p>));
    return categories;
  }
}
export default Categories;
