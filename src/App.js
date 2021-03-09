import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </Router>
  );
}

export default App;
