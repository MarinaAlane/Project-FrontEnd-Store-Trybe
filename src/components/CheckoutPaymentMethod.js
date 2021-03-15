import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutPaymentMethod extends React.Component {
  constructor() {
    super();
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  creditCardPaymentMethod() {
    return (
      <div className="cardPaymentMethodField">
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
        <fieldset className="paymentMethodField">
          <legend className="checkoutLegend">Método de pagamento</legend>
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
          <fieldset className="creditCardFieldset">
            <legend className="checkoutLegend">Cartão de Crédito</legend>
            { this.creditCardPaymentMethod() }
          </fieldset>
        </fieldset>
        <Link to="/">
          <button className="cartBtn" type="submit">Finalizar Compra</button>
        </Link>
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
