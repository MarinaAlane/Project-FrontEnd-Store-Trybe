import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import Details from './pages/Details';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route
          path="/details/:idCategory/:idProduct"
          render={ (props) => <Details { ... props } /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
