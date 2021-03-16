import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCart: [],
    };
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleProduct(item) {
    const { itemsCart } = this.state;
    this.setState({
      itemsCart: [...itemsCart, item],
    });
  }

  render() {
    const { itemsCart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Home handleProduct={ this.handleProduct } /> }
            />
            <Route
              path="/product-detail/:id"
              render={ (props) => (<ProductDetail
                handleProduct={ this.handleProduct }
                location={ props.location }
              />) }
            />
            <Route
              path="/shopping-cart"
              render={ () => <Cart itemsCart={ itemsCart } /> }
            />
            <Route
              path="/checkout"
              render={ () => <CheckOut itemsCart={ itemsCart } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
