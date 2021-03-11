import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSearch extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
          placeholder="Digite o produto"
          id="input-search"
          type="text"
          onChange={ onChange }
          data-testid="query-input"
        />
      </div>
    );
  }
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputSearch;
