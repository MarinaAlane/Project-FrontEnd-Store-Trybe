import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import Home from './Components/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
