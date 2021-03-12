import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './pages/Checkout';
import Details from './pages/Details';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/checkout" component={ Checkout } />
        <Route
          path="/details/:idCategory/:idProduct"
          render={ (props) => <Details { ... props } /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
