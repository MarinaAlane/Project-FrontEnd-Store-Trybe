import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import shoppingCart from './shoppingCart';

class App extends Component {
  render() {
    return (
      <div>

        <input type="text" placeholder="Digite aqui" />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <BrowserRouter>
          <Route path="/shoppingCart" component={ shoppingCart } />
          <Link to="/shoppingCart">
            <button type="button" data-testid="shopping-cart-button">ShoppingCart</button>
          </Link>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
