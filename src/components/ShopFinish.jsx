import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PayForm from './Payform';

class ShopFinish extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: '',
      pagamento: '',
      redirect: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  btnFinishShop() {
    const { nome, email, cpf, telefone, endereco,
      numero, complemento, cidade, estado, pagamento } = this.state;
    const generalArray = [nome, email, cpf,
      telefone, endereco, numero, complemento, cidade, estado, pagamento];
    const arrayCheck = generalArray.every((item) => item !== '');
    if (arrayCheck) this.setState({ redirect: true });
  }

  renderInfoBuyerAux() {
    const { numero, cidade, estado, telefone } = this.state;
    return (
      <>
        <label htmlFor="numero">
          <input
            onChange={ this.handleChange }
            value={ numero }
            type="text"
            name="numero"
            id="numero"
            placeholder="Número"
          />
        </label>
        <label htmlFor="cidade">
          <input
            onChange={ this.handleChange }
            value={ cidade }
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
          />
        </label>
        <label htmlFor="estado">
          <input
            onChange={ this.handleChange }
            value={ estado }
            type="text"
            name="estado"
            id="estado"
            placeholder="Estado"
          />
        </label>
        <label htmlFor="telefone">
          <input
            data-testid="checkout-phone"
            onChange={ this.handleChange }
            value={ telefone }
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
          />
        </label>
        {this.renderInfoBuyerAuxAdress()}
      </>
    );
  }

  renderInfoBuyerAuxAdress() {
    const { cep, endereco, complemento } = this.state;
    return (
      <>
        <label htmlFor="cep">
          <input
            data-testid="checkout-cep"
            onChange={ this.handleChange }
            value={ cep }
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
          />
        </label>
        <label htmlFor="endereco">
          <input
            data-testid="checkout-adress"
            onChange={ this.handleChange }
            value={ endereco }
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Endereço"
          />
        </label>
        <label htmlFor="complemento">
          <input
            onChange={ this.handleChange }
            value={ complemento }
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
          />
        </label>
      </>
    );
  }

  renderInfoBuyer() {
    const { nome, cpf, email } = this.state;
    return (
      <section>
        Informações do comprador:
        <label htmlFor="nome">
          <input
            data-testid="checkout-fullname"
            onChange={ this.handleChange }
            value={ nome }
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome Completo"
          />
        </label>
        <label htmlFor="cpf">
          <input
            data-testid="checkout-cpf"
            onChange={ this.handleChange }
            value={ cpf }
            type="text"
            name="cpf"
            id="cpf"
            placeholder="CPF"
          />
        </label>
        <label htmlFor="email">
          <input
            data-testid="checkout-email"
            onChange={ this.handleChange }
            value={ email }
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
          />
        </label>
        {this.renderInfoBuyerAuxAdress()}
        {this.renderInfoBuyerAux()}
      </section>
    );
  }

  renderCartTotal({ cart, count }) {
    const total = cart.reduce((acc, curr, index) => {
      const value = curr.price * count[index];
      return acc + value;
    }, 0);
    return total;
  }

  render() {
    const { cart } = this.props;
    const { redirect } = this.state;
    const products = cart.cart;
    if (redirect) return (<Redirect to="/" />);
    return (
      <div>
        <section>
          Revise seus produtos:
          {products && products.map((product, index) => (
            <div key={ index }>
              <img src={ product.thumbnail } alt="produto" />
              Produto:
              {product.price}
            </div>
          ))}
          <span>
            Total
            {products && this.renderCartTotal(cart)}
          </span>
          {this.renderInfoBuyer()}
          <PayForm handleChange={ this.handleChange } />
          <button
            type="button"
            onClick={ this.btnFinishShop }
          >
            Comprar
          </button>
        </section>
      </div>
    );
  }
}

ShopFinish.propTypes = {
  cart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ShopFinish;
