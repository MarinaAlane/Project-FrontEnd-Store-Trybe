import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

class ButtonSearch extends React.Component {
  render() {
    const { getProduct } = this.props;
    return (
      <button type="submit" onClick={ getProduct } data-testid="query-button">
        <AiOutlineSearch />
      </button>
    );
  }
}

ButtonSearch.propTypes = {
  getProduct: PropTypes.func.isRequired,
};

export default ButtonSearch;
