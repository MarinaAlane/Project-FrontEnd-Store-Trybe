import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ (props) => <Home { ...props } /> } />
          <Route
            path="/product-detail/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route path="/shopping-cart" render={ (props) => <Cart { ...props } /> } />
          <Route path="/checkout" render={ (props) => <CheckOut { ...props } /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
