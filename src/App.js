import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route>
          <Switch>
            <Route exact path="/" component={ Header } />
          </Switch>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
