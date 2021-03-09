import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

class App extends React.component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<ProductList />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
