import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button type="button">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Carrinho :D
          </Link>
        </button>
      </div>
    );
  }
}
/// CRIAR O PULL REQUEST
export default Home;
