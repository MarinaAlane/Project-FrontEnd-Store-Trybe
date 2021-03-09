import React, { Component } from 'react';
import * as api from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: [],
    };
  }

  componentDidMount() {
    api.getCategories().then(
      (response) => this.setState({ categoryName: response }),
    );
  }

  render() {
    const { categoryName } = this.state;
    return (
      <aside>
        {categoryName.map((currentValue) => (
          <button
            key={ currentValue.id }
            type="button"
            data-testid="category"
          >
            {currentValue.name}
          </button>)) }
      </aside>
    );
  }
}

export default CategoriesList;
