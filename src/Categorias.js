import React from 'react';
import Proptypes from 'prop-types';

class Categorias extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map((categoria) => (
          <button type="button" key={ categoria.id } data-testid="category">
            {categoria.name}
          </button>
        ))}
      </div>
    );
  }
}

Categorias.propTypes = {
  categories: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default Categorias;
