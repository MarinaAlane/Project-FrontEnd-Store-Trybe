import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route to="/" component={ Home } />
      </Router>
    );
  }
}

export default App;
