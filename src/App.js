import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={ HomePage } />
        </Switch>
      </Router>
    );
  }
}

export default App;
