import React from 'react';
import Proptypes from 'prop-types';

class Categorias extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          {categories.map((item) => (
            <li key={ item.id } data-testid="category">
              { item.name }
            </li>
          ))}
        </ul>
      </aside>

    );
  }
}

Categorias.propTypes = {
  categories: Proptypes.arrayOf().isRequired,
};

export default Categorias;
