import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import InputCategory from './InputCategory';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.state = {
      promisse: false,
      categories: '',
    };
  }

  componentDidMount() {
    this.renderList();
  }

  async renderList() {
    const result = await getCategories().then((categories) => this.setState({
      categories,
      promisse: true,
    }));
    return result;
  }

  render() {
    const { promisse, categories } = this.state;
    const { onChange } = this.props;
    if (promisse === true) {
      return (
        <section className="categories-list">
          <h4 className="categories-list-title">Categorias:</h4>
          { categories
            .map((category) => (
              <InputCategory
                key={ category.id }
                id="category"
                labelText={ category.name }
                value={ category.id }
                onChange={ onChange }
              />
            )) }
        </section>
      );
    }
    return <ol />;
  }
}

Categories.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Categories;
