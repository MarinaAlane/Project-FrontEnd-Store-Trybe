import React from 'react';
import { Link } from 'react-router-dom';
import creditCard from '../icons/creditCard.png';

class CheckoutPaymentMethod extends React.Component {
  constructor() {
    super();
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  creditCardPaymentMethod() {
    return (
      <div className="cardPaymentMethodField">
        <label htmlFor="payment">
          <p>Boleto</p>
          <input
            name="payment"
            id="boleto"
            value="boleto"
            type="radio"
            onChange={ this.onChange }
          />
          <img src={ creditCard } alt="card" width="50px" />
        </label>
        <label className="cardOption" htmlFor="payment">
          <p>Visa</p>
          <input
            name="payment"
            id="visa"
            value="visa"
            type="radio"
            onChange={ this.onChange }
          />
          <img src={ creditCard } alt="card" width="50px" />
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
          <img src={ creditCard } alt="card" width="50px" />
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
          <img src={ creditCard } alt="card" width="50px" />
        </label>
      </div>
    );
  }

  paymentMethod() {
    return (
      <div>
        <fieldset className="paymentMethodField">
          <legend className="checkoutLegend">Método de pagamento</legend>
          { this.creditCardPaymentMethod() }
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
