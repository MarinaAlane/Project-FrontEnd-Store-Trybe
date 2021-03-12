import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <li data-testid="category">{ name }</li>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
