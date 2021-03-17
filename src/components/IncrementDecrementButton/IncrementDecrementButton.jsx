import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class IncrementDecrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incDisabled: false,
      decDisabled: false,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const { value, maxValue, updateQuantity } = this.props;
    if (value < maxValue) {
      this.setState({ incDisabled: false });
      updateQuantity(value + 1);
    } else {
      this.setState({ incDisabled: true });
    }
  }

  decrease() {
    const { value, updateQuantity } = this.props;
    if (value > 0) {
      this.setState({ decDisabled: false });
      updateQuantity(value - 1);
    } else {
      this.setState({ decDisabled: true });
    }
  }

  render() {
    const { value } = this.props;
    const { incDisabled, decDisabled } = this.state;
    return (
      <section>
        <Button
          dataTestId
          submit={ false }
          id="product-decrease-quantity"
          onHandleClick={ this.decrease }
          disabled={ decDisabled }
        >
          -
        </Button>
        <span data-testid="shopping-cart-product-quantity">{ value }</span>
        <Button
          dataTestId
          submit={ false }
          id="product-increase-quantity"
          onHandleClick={ this.increase }
          disabled={ incDisabled }
        >
          +
        </Button>
      </section>
    );
  }
}

const { func, number } = PropTypes;
IncrementDecrementButton.propTypes = {
  updateQuantity: func.isRequired,
  value: number.isRequired,
  maxValue: number.isRequired,
};

export default IncrementDecrementButton;
