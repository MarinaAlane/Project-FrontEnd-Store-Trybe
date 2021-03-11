import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';
import ItemDetails from './components/ItemDetails';
import CheckoutCart from './components/CheckoutCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(item) {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [...cartItems, item],
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <MainPage handleCart={ this.handleCart } /> }
          />
          <Route
            path="/shopping-cart"
            render={ () => <ShoppingCart cartItems={ cartItems } /> }
          />
          <Route
            path="/details/:id"
            render={ (props) => (
              <ItemDetails handleCart={ this.handleCart } location={ props.location } />
            ) }
          />
          <Route path="/checkout-cart" render={ () => <CheckoutCart cartItems={ cartItems } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
