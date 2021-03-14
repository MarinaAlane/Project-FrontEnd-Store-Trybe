import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { name, id, getProductsFromQuery, inputValue } = this.props;
    return (
      <li data-testid="category">
        <button type="button" onClick={ () => getProductsFromQuery(id, inputValue) }>{ name }</button>
      </li>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
