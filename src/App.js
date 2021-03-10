import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
