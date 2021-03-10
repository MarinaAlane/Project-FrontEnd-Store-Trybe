import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/productDetails" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
