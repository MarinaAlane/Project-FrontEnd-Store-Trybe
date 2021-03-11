import React from 'react';
import PropTypes from 'prop-types';

class InputCategory extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    const { value, checked } = event.target;
    this.setState({ [value]: checked === true ? false : checked });
  }

  render() {
    const { labelText, value, id } = this.props;
    return (
      <label htmlFor={ id } key={ value }>
        <input
          value={ value }
          data-testid={ id }
          type="radio"
          onChange={ this.handleOptionChange }
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
