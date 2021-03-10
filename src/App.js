import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

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
          <Route
            path="/Cart"
            component={ Cart }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
