import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSearch extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <input
        placeholder="Digite o produto"
        id="input-search"
        type="text"
        onChange={ handleChange }
        data-testid="query-input"
      />
    );
  }
}

InputSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default InputSearch;
