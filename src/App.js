import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="page-title">Frontend Online Store</div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
      </Switch>
    </Router>
  );
}

export default App;
