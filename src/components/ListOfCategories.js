import React from 'react';

import PropTypes from 'prop-types';

class ListOfCategories extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <li>
          {category}
        </li>
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ListOfCategories;
