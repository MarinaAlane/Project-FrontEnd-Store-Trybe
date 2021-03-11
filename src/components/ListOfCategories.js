import React from 'react';
import PropTypes from 'prop-types';

class ListOfCategories extends React.Component {
  render() {
    const { category } = this.props;
    const { name, id } = category;
    return (
      <div>
        <label htmlFor="category">
          <input
            type="radio"
            className={ id }
            data-testid="category"
          />
          {name}
        </label>
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListOfCategories;
