import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map(({ name, id }) => (
          <div key={ id }>
            <label htmlFor={ id }>
              <input data-testid="category" type="checkbox" />
              { name }
            </label>
          </div>))}
      </div>);
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategories;
