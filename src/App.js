import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import ShoppingCart from './components/ShoppingCart';
import FullProduct from './components/FullProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <InitialPage /> } />
          <Route exact path="/cart" render={ () => <ShoppingCart /> } />
          <Route path="/product/:id/:title" component={ FullProduct } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
