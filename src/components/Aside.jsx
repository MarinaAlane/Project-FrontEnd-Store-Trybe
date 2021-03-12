import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class Aside extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <h2>Category</h2>
        <ul>
          {categories.map((category) => (
            <Category name={ category.name } key={ category.name } />
          ))}
        </ul>
      </aside>
    );
  }
}

Aside.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Aside;
