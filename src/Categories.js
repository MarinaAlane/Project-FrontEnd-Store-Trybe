import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <label
        htmlFor={ id }
        data-testid="category"
      >
        { name }
        <input
          type="radio"
          id={ id }
          key={ id }
          className="cat-radio"
        />
      </label>
    );
  }
}

Categories.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Categories;
