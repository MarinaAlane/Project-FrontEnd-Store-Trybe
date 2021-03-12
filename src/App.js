import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartShop from './pages/CartShop';
import ProductList from './pages/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route path="/cartshop" component={ CartShop } />
        <Route
          path="/product-details/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </Router>
  );
}

export default App;
