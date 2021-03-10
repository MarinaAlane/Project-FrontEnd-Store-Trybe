import React from 'react';

import { Link } from 'react-router-dom';
import Categories from './Categories';

class Home extends React.Component {
  render() {
    return (
      <section>
        <input />
        <Link data-testid="shopping-cart-button" to="/components/carrinho">
          <i className="fas fa-shopping-cart" />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
      </section>
    );
  }
}

export default Home;
