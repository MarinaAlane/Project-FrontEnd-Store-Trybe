import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductList } />
      </Switch>
    </Router>
  );
}

export default App;
