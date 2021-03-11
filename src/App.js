import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import ProductDetais from './pages/ProductDetais';

function App() {
  return (
    <BrowserRouter>
      <Link to="/cart" data-testid="shopping-cart-button">
        Cart
      </Link>
      <Switch>
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetais { ...props } /> }
        />
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ LandingPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
