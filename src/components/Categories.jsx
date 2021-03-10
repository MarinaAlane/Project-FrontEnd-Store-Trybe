import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    console.log(categories);
    return (
      categories.map((category) => <li key={ category.id }>{ category.name }</li>)
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
};

export default Categories;
