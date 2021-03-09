import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/cart" component={ CartPage } />
        </Switch>
      </Router>
    );
  }
}

export default App;
