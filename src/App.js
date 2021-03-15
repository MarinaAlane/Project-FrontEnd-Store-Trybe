import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import ProductDetais from './pages/ProductDetais';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetais { ...props } /> }
        />
        <Route path="/cart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
        <Route exact path="/" component={ LandingPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
