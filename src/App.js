import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import ListCategories from './pages/ListCategories';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <Route path="/cart" component={ Cart } />
      </BrowserRouter>
      <ListCategories />
    </div>
  );
}

export default App;
