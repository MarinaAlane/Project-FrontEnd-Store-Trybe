import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

// requisito 2

class Home extends React.Component {
  render() {
    return (
      <header className="home-header-container">
        <div className="search-bar-container">
          <input className="App" type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <button type="button" alt="cart-button" />
        </Link>
      </header>
    );
  }
}

export default Home;
