import React from 'react';
import Router, { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text"></input>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      {/* <Router>
        <Switch>
          <Route exact path="/" component="" />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
