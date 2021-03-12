import React from 'react';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      city: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  fullNameInput(fullName) {
    return (
      <input
        data-testid="checkout-fullname"
        type="text"
        placeholder="Nome Completo"
        name="fullName"
        onChange={ this.onChange }
        value={ fullName }
        required
      />
    );
  }

  cpfInput(cpf) {
    return (
      <input
        data-testid="checkout-cpf"
        type="text"
        placeholder="CPF"
        name="cpf"
        onChange={ this.onChange }
        value={ cpf }
        required
      />
    );
  }

  emailInput(email) {
    return (
      <input
        data-testid="checkout-email"
        type="email"
        placeholder="Email"
        name="email"
        onChange={ this.onChange }
        value={ email }
        required
      />
    );
  }

  phoneInput(phone) {
    return (
      <input
        data-testid="checkout-phone"
        type="text"
        placeholder="Telefone"
        name="phone"
        onChange={ this.onChange }
        value={ phone }
        required
      />
    );
  }

  cepInput(cep) {
    return (
      <input
        data-testid="checkout-cep"
        type="text"
        placeholder="CEP"
        name="cep"
        onChange={ this.onChange }
        value={ cep }
        required
      />
    );
  }

  addressInput(address) {
    return (
      <input
        data-testid="checkout-address"
        type="text"
        placeholder="Endereço"
        name="address"
        onChange={ this.onChange }
        value={ address }
        required
      />
    );
  }

  complementInput(complement) {
    return (
      <input
        data-testid="checkout-complement"
        type="text"
        placeholder="Complemento"
        name="complement"
        onChange={ this.onChange }
        value={ complement }
        required
      />
    );
  }

  cityInput(city) {
    return (
      <input
        type="text"
        placeholder="Cidade"
        name="city"
        onChange={ this.onChange }
        value={ city }
        required
      />
    );
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

  productCartReview() {
    const storedProducts = JSON.parse(localStorage.getItem('itens'));
    return (
      <div>
        <fieldset>
          <legend>Revise seus Produtos</legend>
          { storedProducts.map(((product) => (
            <div key={ `${product.id}` }>
              <img alt="Product" src={ product.thumbnail } />
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
              <p>{ product.price }</p>
            </div>
          ))) }
        </fieldset>
      </div>
    );
  }

  render() {
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amazonas', 'São Paulo', 'Ceará'];
    const { fullName, email, cpf, phone, cep, address, complement, city } = this.state;
    return (
      <div>
        <div>
          { this.productCartReview() }
          <fieldset>
            <legend>Informações do Comprador</legend>
            { this.fullNameInput(fullName) }
            { this.cpfInput(cpf) }
            { this.emailInput(email) }
            { this.phoneInput(phone) }
            { this.cepInput(cep) }
            { this.addressInput(address) }
            { this.complementInput(complement) }
            { this.cityInput(city) }
            <select required name="countryState" onChange={ this.onChange }>
              <option>Selecione</option>
              { states.map((value, key) => (<option key={ key }>{ value }</option>)) }
            </select>
          </fieldset>
          { this.paymentMethod() }
        </div>
        <Link to="/"><button type="submit">Finalizar Compra</button></Link>
      </div>
    );
  }
}

export default Checkout;
