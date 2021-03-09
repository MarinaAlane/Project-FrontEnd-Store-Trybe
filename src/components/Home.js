import React from 'react';
import { Link } from 'react-router-dom';
import Carrinho from './Carrinho';

class Home extends React.Component {
  render() {
    return (
      <section>
        <input data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </input>
        <button data-testid="shopping-cart-button" type="button">
          <Link to="/carrinho" component={ Carrinho } />
        </button>
      </section>
    );
  }
}

export default Home;
