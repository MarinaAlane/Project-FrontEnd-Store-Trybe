import React from 'react';

class CheckoutPaymentMethod extends React.Component {
  constructor() {
    super();
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  creditCardPaymentMethod() {
    return (
      <div>
        <label htmlFor="payment">
          <p>Visa</p>
          <input
            name="payment"
            id="visa"
            value="visa"
            type="radio"
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="payment">
          <p>MasterCard</p>
          <input
            name="payment"
            id="mastercard"
            value="mastercard"
            type="radio"
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="payment">
          <p>Elo</p>
          <input
            name="payment"
            id="elo"
            value="elo"
            type="radio"
            onChange={ this.onChange }
          />
        </label>
      </div>
    );
  }

  paymentMethod() {
    return (
      <div>
        <fieldset>
          <legend>Método de pagamento</legend>
          <label htmlFor="payment">
            <p>Boleto</p>
            <input
              name="payment"
              id="boleto"
              value="boleto"
              type="radio"
              onChange={ this.onChange }
            />
          </label>
          <fieldset>
            <legend>Cartão de Crédito</legend>
            { this.creditCardPaymentMethod() }
          </fieldset>
        </fieldset>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.paymentMethod() }
      </div>
    );
  }
}

export default CheckoutPaymentMethod;
