import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, ShoppingCart } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/meucarrinho" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
