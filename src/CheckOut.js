import React from 'react';
import Proptypes from 'prop-types';
import './CheckOut.css';

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname:'',
      email: '',
      cpf:'',
      phone: '',
      cep: '',
      adress: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [{ name }]: value,
    });
  }

  createFullname(fullname) {
    return (
      <label htmlFor="checkout-fullname">
        Nome Completo
        <input
          data-testid="checkout-fullname"
          type="text"
          value={ fullname }
          onChange={ this.handleChange }
          id="checkout-fullname"
        />
      </label>
    );
  }

  createEmail(email) {
    return (
      <label htmlFor="checkout-email">
        E-mail
        <input
          data-testid="checkout-email"
          type="text"
          value={ email }
          onChange={ this.handleChange }
          id="checkout-email"
        />
      </label>
    );
  }

  createCpf(cpf) {
    return (
      <label htmlFor="checkout-cpf">
        CPF
        <input
          data-testid="checkout-cpf"
          type="number"
          value={ cpf }
          onChange={ this.handleChange }
          id="checkout-cpf"
        />
      </label>
    );
  }

  createPhone(phone) {
    return (
      <label htmlFor="checkout-phone">
        Telefone
        <input
          data-testid="checkout-phone"
          type="number"
          value={ phone }
          onChange={ this.handleChange }
          id="checkout-phone"
        />
      </label>
    );
  }

  createCep(cep) {
    return (
      <label htmlFor="checkout-cep">
        CEP
        <input
          data-testid="checkout-cep"
          type="number"
          value={ cep }
          onChange={ this.handleChange }
          id="checkout-cep"
        />
      </label>
    );
  }

  createAdress(adress) {
    return (
      <label htmlFor="checkout-adress">
        Endereço
        <input
          data-testid="checkout-adress"
          type="text"
          value={ adress }
          onChange={ this.handleChange }
          id="checkout-adress"
        />
      </label>
    );
  }

  createPaymentMethod() {
    return (
      <session className="form-payment">
        <div>
          <h6>Método de Pagamento</h6>
          <label htmlFor="boleto">
            Boleto
            <input type="radio" id="boleto" name="payment" onClick={ this.clearForm } />
          </label>
          <label htmlFor="Visa">
            Visa
            <input type="radio" id="Visa" name="payment" onClick={ this.clearForm } />
          </label>
          <label htmlFor="Master">
            Master
            <input type="radio" id="Master" name="payment" onClick={ this.clearForm } />
          </label>
          <label htmlFor="Elo">
            Elo
            <input type="radio" id="Elo" name="payment" onClick={ this.clearForm } />
          </label>
        </div>
      </session>
    );
  }

  createbButton() {
    return (
      <button type="button" onClick={ this.clearForm }>
        Comprar
      </button>
    );
  }

  clearForm() {
    return (
      // Falta completar a funcao que envia o pedido, 
      // com os dados de produtos, cliente e metodo de pagamento. 
      // Depois limpa os estados
      <span> cria funcao </span>
    );
  }

  render() {
    return (
      <div>
        <form>
          <session className="form-personal-info">
            {this.createFullname()}
            {this.createEmail()}
            {this.createCpf()}
            {this.createPhone()}
            {this.createCep()}
            {this.createAdress()}
          </session>
          {this.createPaymentMethod()}
          {this.createbButton()}
        </form>
      </div>
    );
  }
}

CheckOut.propTypes = {
  fullname: Proptypes.string,
  email: Proptypes.string,
  cpf: Proptypes.number,
  phone: Proptypes.number,
  cep: Proptypes.number,
  adress: Proptypes.string,
}.isRequired;

export default CheckOut;
