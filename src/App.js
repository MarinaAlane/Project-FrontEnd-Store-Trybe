import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './services/ProductDetails'
import Home from './services/Home';
import ShoppingCart from './services/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/productdetails" component={ ProductDetails } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
