import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryInput from './CategoryInput';

require('./CategoriesList.css');

class CategoriesList extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="CategoriesList">
        <p>Categorias: </p>
        { categories.map(({ name, id }) => (
          <CategoryInput key={ id } name={ name } id={ id } />)) }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default CategoriesList;
