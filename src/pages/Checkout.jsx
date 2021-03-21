import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { captureProduct } from '../services/functions';
import Home from './Home';
import ProductCheckout from '../components/ProductCheckout';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPriceProducts: 0,
    };

    this.userInputsForm = this.userInputsForm.bind(this);
    this.paymentsForm = this.paymentsForm.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    const [products, totalPriceProducts] = captureProduct();
    this.setState({
      products,
      totalPriceProducts,
    });
  }

  userInputsForm() {
    const array = [
      {
        text: 'Nome completo',
        type: 'text',
        testid: 'checkout-fullname',
        label: 'fullname',
      },
      {
        text: 'Email',
        type: 'email',
        testid: 'checkout-email',
        label: 'email',
      },
      { text: 'CPF', type: 'text', testid: 'checkout-cpf', label: 'cpf' },
      {
        text: 'Telefone',
        type: 'text',
        testid: 'checkout-phone',
        label: 'phone',
      },
      { text: 'CEP', type: 'text', testid: 'checkout-cep', label: 'cep' },
      {
        text: 'Endereço',
        type: 'text',
        testid: 'checkout-address',
        label: 'address',
      },
    ];

    return (
      array.map(({ text, type, testid, label }, index) => (
        <label key={ `input${index}` } htmlFor={ label }>
          {text}
          <input type={ type } id={ label } data-testid={ testid } />
        </label>
      ))
    );
  }

  paymentsForm() {
    const array = ['Boleto', 'Visa', 'MasterCard', 'Elo'];

    return (array.map((pay, index) => (
      <label key={ `payment${index}` } htmlFor={ `checkout-${pay.toLowerCase()}` }>
        <input
          type="radio"
          id={ `checkout-${pay.toLowerCase()}` }
          name="payment"
          value={ pay.toLowerCase() }
          onClick={ this.handlePayment }
        />
        {pay}
      </label>)));
  }

  renderCheckout() {
    const { products, totalPriceProducts } = this.state;

    return (
      <>
        <header className="checkout-header">
          <Link to="/cart" data-testid="back-home-button">
            <i className="far fa-arrow-alt-circle-left" />
          </Link>
        </header>
        <main>
          <section className="checkout-content">
            <h1>Resumo da Compra</h1>
            {products.map((eachProduct) => (
              <ProductCheckout key={ eachProduct.id } eachProduct={ eachProduct } />
            ))}
            <p>{totalPriceProducts}</p>
          </section>
          <section className="checkout-content">
            <h1>Informações Comprador</h1>
            {this.userInputsForm()}
          </section>
          <section className="checkout-content">
            <h1>Métodos de Pagamento</h1>
            { `Total: ${this.paymentsForm()}` }
          </section>
          <button type="button">Finalizar Compra</button>
        </main>
      </>
    );
  }

  render() {
    const {
      location: { state },
    } = this.props;

    return (
      <div>
        {!state ? (
          <Redirect to="/" component={ Home } />
        ) : (
          this.renderCheckout(state)
        )}
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      access: PropTypes.bool,
    }),
  }).isRequired,
};

export default Checkout;
