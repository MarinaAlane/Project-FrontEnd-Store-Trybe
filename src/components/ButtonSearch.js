import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

class ButtonSearch extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="submit" onClick={ onClick } data-testid="query-button">
        <AiOutlineSearch />
      </button>
    );
  }
}

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSearch;
