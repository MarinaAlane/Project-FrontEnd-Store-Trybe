import React from 'react';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    const { listOfProducts } = this.props;
    this.state = {
      order: listOfProducts,
      totalPrice: 0,
    };
    this.productsReview = this.productsReview.bind(this);
    this.buyerInfos = this.buyerInfos.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  productsReview() {
    const { listOfProducts, totalPrice } = this.state;
    return (
      <div>
        <h1>Revise seus Produtos</h1>
        {
          listOfProducts.map(({ title, thumbnail, quantity, id, price }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ `foto ${title}` } />
              <span>{ title }</span>
              <span>{ price * quantity }</span>
            </div>
          ))
        }
        <p>{ totalPrice }</p>
      </div>
    );
  }

  totalPrice() {
    const total = listOfProducts
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.setState({
      totalPrice: total,
    });
  }

  buyerInfos() {
    return (
      <div>
        <input
          type="text"
          name="name"
          data-testid="checkout-fullname"
          placeholder="Nome completo"
          required
        />
        <input
          type="number"
          name="CPF"
          data-testid="checkout-cpf"
          placeholder="CPF"
          required
        />
        <input
          type="email"
          name="email"
          data-testid="checkout-email"
          placeholder="E-mail"
          required
        />
        <input
          type="number"
          name="telefone"
          data-testid="checkout-phone"
          placeholder="Telefone"
          required
        />
        <input
          type="number"
          name="CEP"
          data-testid="checkout-cep"
          placeholder="CEP"
          required
        />
        <input
          type="text"
          name="address"
          data-testid="checkout-address"
          placeholder="Endereço"
          required
        />
      </div>
    );
  }

  paymentMethod() {
    return (
      <div>
        <label htmlFor="boleto">
          Boleto
          <input
            id="boleto"
            type="radio"
            name="payment"
          />
        </label>
        <label>

        </label>
        <input
          type="radio"
          name="payment"
        />
      </div>
    );
  }

  renderForm() {
    return (
      <form>
        { this.buyerInfos() }
        { this.paymentMethod() }
        <button type="button">Finalizar a Compra!</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.productsReview() }
        { this.buyerInfos() }
      </div>
    );
  }
}

export default OrderSummary;
