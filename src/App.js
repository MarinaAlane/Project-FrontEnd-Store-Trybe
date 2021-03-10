import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import ListCategories from './pages/ListCategories';

function App() {
  return (
    <BrowserRouter>
      <Link to="/cart" data-testid="shopping-cart-button">
        Cart
      </Link>
      <Route exact path="/" component={ LandingPage } />
      <Route path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
