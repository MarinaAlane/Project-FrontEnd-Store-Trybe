import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route>
          <Switch>
            <Route exact path="/" component={ ProductList } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
          </Switch>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
