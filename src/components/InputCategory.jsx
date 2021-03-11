import React from 'react';
import PropTypes from 'prop-types';

class InputCategory extends React.Component {
  render() {
    const { labelText, value, id } = this.props;
    return (
      <label htmlFor={ id } key={ value }>
        <input
          value={ value }
          data-testid={ id }
          type="radio"
        />
        { labelText }
      </label>
    );
  }
}

InputCategory.defaultProps = {
  labelText: '',
  id: '',
  value: '',
};

InputCategory.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

export default InputCategory;
