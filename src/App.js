import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartButton from './components/CartButton';
import ProductList from './components/ProductList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<ProductList />) }
          />
          <Route path="/cart" render={ () => (<CartButton />) } />
        </Switch>
      </Router>
    );
  }
}

export default App;
