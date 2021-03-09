import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
