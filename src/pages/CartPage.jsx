import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import goBack from '../images/voltar.png';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { itensAddToCart } } } = props;
    this.state = {
      itensAdded: itensAddToCart,
    };
  }

  render() {
    const { itensAdded } = this.state;
    return (
      <>
        <header>
          <Link to="/">
            <img src={ goBack } alt="goBack-icon" />
          </Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </header>
        <main>
          {itensAdded.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h1 data-testid="shopping-cart-product-name">{ title }</h1>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </div>
          ))}
          <p
            data-testid="shopping-cart-product-quantity"
          >
            {`Quantidade de itens: ${itensAdded.length}`}
          </p>

        </main>
      </>
    );
  }
}

CartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      itensAddToCart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CartPage;
