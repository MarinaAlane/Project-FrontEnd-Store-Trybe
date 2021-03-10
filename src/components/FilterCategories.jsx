import React, { Component } from 'react';
import { getCategories } from '../services/api';

class FilterCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
    this.categoriesList = this.categoriesList.bind(this);
  }

  componentDidMount() {
    this.categoriesList();
  }

  async categoriesList() {
    const { filter } = this.props;
    const cat = await getCategories();
    const list = cat.map((data) => (
      <button
        key={ data.id }
        data-testid="category"
        onClick={ filter }
        id={ data.id }
        type="button"
        className="category-button"
      >
        {data.name}
      </button>

    ));
    this.setState({
      categories: list,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias</h3>
        <section>
          {categories}
        </section>
      </div>
    );
  }
}

export default FilterCategories;
