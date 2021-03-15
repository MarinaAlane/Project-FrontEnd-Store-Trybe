import React from 'react';
import PropTypes from 'prop-types';
import ItemsCart from './ItemsCart';

class Checkout extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section>
        { products.map((item) => (
          <ItemsCart key={ item.id } productInfo={ item } />
        ))}
        <div>
          Preço Total:
          { products.reduce((total, item) => total + (item.price), 0)}
        </div>
        <form>
          <div>
            <p> Nome Completo </p>
            <input type="text" data-testid="checkout-fullname" />
          </div>
          <div>
            <p> E-mail </p>
            <input type="email" data-testid="checkout-email" />
          </div>
          <div>
            <p> CPF </p>
            <input type="text" data-testid="checkout-cpf" />
          </div>
          <div>
            <p> Telefone </p>
            <input type="text" data-testid="checkout-phone" />
          </div>
          <div>
            <p> CEP </p>
            <input type="text" data-testid="checkout-cep" />
          </div>
          <div>
            <p> Endereço </p>
            <input type="text" data-testid="checkout-address" />
          </div>
        </form>
      </section>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

Checkout.defaultProps = {
  products: [],
};
