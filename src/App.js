import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/searchBar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ SearchBar } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </Router>  
  );
}

export default App;
