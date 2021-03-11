import React from 'react';
import * as api from '../../services/api';
import InputContext from '../InputContext';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.updateState(category);
  }

  updateState(category) {
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    return (
      <InputContext.Consumer>
        {
          ({ setSelectedCategory }) => {
            return category.map(({ id, name }) => (
              <li
                data-testid="category"
                key={ id }
                onClick={ () => setSelectedCategory(id) }
              >
                { name }
              </li>
            ));
          }
        }
      </InputContext.Consumer>
    );
  }
}

export default CategoryList;
