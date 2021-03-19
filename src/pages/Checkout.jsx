import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.cartHandler,
    };
  }

  render() {
    console.log(this.state);
    const { items, total, remove, changeQuantityOf } = this.state.status;
    const formattedTotal = total().toFixed(2).replace('.', ',');

    return (
      <div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <div>
          <section>
            <div>
                <h2>Revise seus Produtos</h2>
                { items.map((item, index) => (
                  <CartItem
                    key={ item.id }
                    index={ index }
                    item={ item }
                    changeQuantity={ changeQuantityOf }
                    removeItem={ remove }
                  />))}
                <strong>Valor Total da Compra:</strong>
                { ` R$ ${formattedTotal}` }
              </div>
          </section>
          <section>
          <div>
            <h2>Informações do Comprador</h2>
              <input
                type="input"
                placeholder="Nome Completo"
                data-testid="checkout-fullname"
              />
              <input
                type="input"
                placeholder="CPF"
                data-testid="checkout-cpf"
              />
              <input
                type="input"
                placeholder="Email"
                data-testid="checkout-email"
              />
              <input
                type="input"
                placeholder="Telefone"
                data-testid="checkout-phone"
              />
              <input
                type="input"
                placeholder="CEP"
                data-testid="checkout-cep"
              />
              <input
                type="input"
                placeholder="Endereço"
                data-testid="checkout-address"
              />
              <input type="input" placeholder="Complemento" />
              <input type="number" placeholder="Número" />
              <input type="input" placeholder="Cidade" />
            </div>
          </section>
        </div>
        <div>
          <button>Comprar</button>
        </div>
      </div>
    );
  }
}