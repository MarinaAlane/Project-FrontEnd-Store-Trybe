import React, { Component } from 'react';

import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      categories: [],
    };
  }

  async componentDidMount() {
    return getCategories().then((cat) => this.setState({
      categories: cat,
      status: '',
    }));
  }

  render() {
    const { categories, status } = this.state;
    if (status === 'loading') return <div>Loading ...</div>;
    return (
      <div>
        Categorias:
        { categories.map(({ id, name }) => (
          <div data-testid="category" key={ id }>
            <label htmlFor={ name }>
              <input type="radio" name={ name } />
              { name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
