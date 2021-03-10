import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>
          {categories.map(({ name, id }) => (
            <li key={ id } data-testid="category">{name}</li>))}
        </ul>
      </div>);
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategories;
