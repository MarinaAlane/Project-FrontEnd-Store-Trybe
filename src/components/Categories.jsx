import React from 'react';
import PropTypes from 'prop-types';
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
    const { handleClick } = this.props;
    return (
      <aside className="categories-list">
        {categories
          .map(({ id, name }) => (
            <div key={ id }>
              <input
                type="radio"
                key={ id }
                data-testid="category"
                className="category"
                onClick={ () => handleClick(id) }
                name="Categories"
              />
              { name }
            </div>
          ))}
      </aside>
    );
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.length < 1 ? <span>Loading...</span> : this.inputRadioCreator()}
      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
