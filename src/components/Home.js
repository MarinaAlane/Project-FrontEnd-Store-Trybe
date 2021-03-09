import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
          <Link data-testid="shopping-cart-button" to="/components/carrinho">
            <i class="fas fa-shopping-cart"></i>
          </Link>
      </section>
    );
  }
}

export default Home;
