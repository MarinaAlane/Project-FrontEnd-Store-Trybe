import React from 'react';
import * as api from '../services/api';

class ListCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((response) => this
        .setState({ categories: response }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <p>Categorias:</p>
        {categories.map((category) => (
          <label htmlFor="category" key={ category.id }>
            <input
              type="radio"
              value={ category.name }
              key={ category.id }
              name="category"
              data-testid="category"
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

export default ListCategories;
