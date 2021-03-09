import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CartButton extends Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/shopping-cart" />;
    return (
      <button
        type="button"
        data-testid="shopping-cart-button"
        onClick={ this.handleClick }
      >
        Button
      </button>
    );
  }
}

export default CartButton;
