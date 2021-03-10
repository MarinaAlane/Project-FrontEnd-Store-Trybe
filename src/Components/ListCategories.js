import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { category: { id, name } } = this.props;
    return (
      <div data-testid="category">
        <label htmlFor={ id }>
          <input
            type="checkbox"
            id={ id }
            name={ id }
            value={ id }
          />
          {name}
        </label>
      </div>
    );
  }
}

ListCategories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ListCategories;
