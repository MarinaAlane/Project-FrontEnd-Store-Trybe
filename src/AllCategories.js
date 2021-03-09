import React from 'react';
import * as api from './services/api';

class AllCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const gCategories = await api.getCategories();
    this.setState({
      allCategories: gCategories,
    });
  }

  render() {
    const { allCategories } = this.state;
    return (
      <ul>
        { allCategories.map(({ id, nm }) => (
          <li key={ id } data-testid="category">{ nm }</li>))}
      </ul>
    );
  }
}

export default AllCategories;
