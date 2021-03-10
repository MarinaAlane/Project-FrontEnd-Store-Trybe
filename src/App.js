import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';
import Cart from './components/Cart';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    await api.getCategories()
      .then((response) => this.setState({
        categories: response }));
  }

  render() {
    const { categories } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={ () => <ProductList categories={ categories }/> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
