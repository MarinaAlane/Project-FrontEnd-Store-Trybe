import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="Digite" data-testid="home-initial-message">
          <input />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">CARRINHO</Link>
      </section>
    );
  }
}

export default Home;
