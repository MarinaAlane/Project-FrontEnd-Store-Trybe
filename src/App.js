import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    const { listProduct } = this.state;
    this.setState({
      listProduct: [...listProduct, product],
    });
  }

  render() {
    const { listProduct } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                  addProduct={ this.addProduct }
                  listProduct={ listProduct }
                />
              ) }
            />
            <Route
              exact
              path="/shoppingcart"
              render={ ((props) => (
                <ShoppingCart
                  { ...props }
                  addProduct={ this.addProduct }
                  listProduct={ listProduct }
                />)) }
            />
            <Route exact path="/productDetails" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
