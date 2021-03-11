import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Carrinho from './Pages/Carrinho';
import ProductDetails from './Pages/ProductDetails';
import NotFound from './Pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/carrinho" component={ Carrinho } />
          <Route
            path="/productDetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
