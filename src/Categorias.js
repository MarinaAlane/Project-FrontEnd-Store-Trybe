import React from 'react';
import PropTypes from 'prop-types';

class Categorias extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <div>
        {categories.map((categoria) => (
          <button
            id={ categoria.id }
            type="button"
            key={ categoria.id }
            onClick={ onClick }
            data-testid="category"
          >
            {categoria.name}
          </button>
        ))}
      </div>
    );
  }
}

Categorias.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categorias;
