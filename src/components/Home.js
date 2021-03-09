import React from 'react';
import { Link } from 'react-router-dom';
import Carrinho from './Carrinho';

class Home extends React.Component {
  render() {
    return (
      <section>
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="shopping-cart-button" >
          <Link to="/carrinho" component={ Carrinho } />
        </button>
      </section>
    );
  }
}

export default Home;
