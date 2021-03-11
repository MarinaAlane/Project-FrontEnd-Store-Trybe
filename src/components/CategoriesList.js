import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categoriesArray, onClick } = this.props;
    return (
      <div>
        {categoriesArray.length > 0 && categoriesArray
          .map(({ id, name }) => (
            <button
              type="button"
              key={ id }
              data-testid="category"
              onClick={ onClick }
            >
              {name}
            </button>
          ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categoriesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;


      /* <ol>
        Lista de categorias
        {categoriesArray.length > 0 && categoriesArray
          .map(({ id, name }) => <li data-testid="category" key={ id }>{name}</li>)}
      </ol> */