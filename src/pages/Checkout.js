import React, { Component } from 'react';
import Forms from '../components/Forms';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Forms />
        <PaymentMethod />
      </div>
    );
  }
}

export default Checkout;
