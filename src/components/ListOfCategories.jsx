import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class ListOfCategories extends React.Component {
  render() {
    const { categories, onClickSelectedCategory } = this.props;
    if (categories === 0) return <Loading />;
    return (
      <div>
        <p>Categorias:</p>
        <ul>
          {
            categories
              .map((elem) => (
                <li
                  data-testid="category"
                  key={ elem.id }
                  onClick={ () => onClickSelectedCategory(elem.id) }
                >
                  { elem.name }
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  categories: PropTypes.arrayOf().isRequired,
  onClickSelectedCategory: PropTypes.func.isRequired,
};

export default ListOfCategories;
