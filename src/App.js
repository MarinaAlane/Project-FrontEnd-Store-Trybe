import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import ListCategories from './pages/ListCategories';

function App() {
  return (
    <div>
      <ListCategories />
      <BrowserRouter>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <Route path="/cart" component={ Cart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
