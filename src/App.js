import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import * as api from './services/api';
import ProductDetails from './components/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      inputValue: '',
      emptyCart: true,
      cartItems: [],
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.apiRequest = this.apiRequest.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  componentDidMount() {
    this.apiRequest();
  }

  async handleSearchClick() {
    const { inputValue } = this.state;
    let products = [];
    if (inputValue.length !== 0) {
      products = await api.getProductsFromCategoryAndQuery('', inputValue);
    } else {
      products = await api.getProductsFromCategoryAndQuery();
    }
    this.setState({
      products: products.results,
    });
  }

  handleChange({ target }) {
    this.setState({
      inputValue: target.value,
    });
  }

  async handleCategoryClick({ target }) {
    const { id } = target;
    const selectedProducts = await api.getProductsFromCategoryAndQuery(id, '');
    this.setState({
      products: selectedProducts.results,
    });
  }

  async apiRequest() {
    const { getCategories, getProductsFromCategoryAndQuery } = api;
    const products = await getProductsFromCategoryAndQuery();
    const categories = await getCategories();
    if (products === undefined) {
      this.setState({
        categories,
      });
    } else {
      this.setState({
        categories,
        products: products.results,
      });
    }
  }

  addProductToCart(productId) {
    const { products, cartItems } = this.state;
    const product = products.find((item) => item.id === productId);
    if ((cartItems.some((item) => item.id === productId))) {
      cartItems.forEach((item) => {
        if (item.id === productId) {
          item.amount += 1;
        }
      });
    } else {
      product.amount = 1;
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, product],
        emptyCart: false,
      }));
    }
  }

  removeItemFromCart(productId) {
    const { cartItems } = this.state;
    const newCartItems = cartItems
      .filter((item) => (item.id !== productId) && item);
    if (newCartItems.length === 0) {
      this.setState({
        emptyCart: true,
      });
    }
    this.setState({
      cartItems: newCartItems,
    });
  }

  render() {
    const {
      handleChange,
      handleSearchClick,
      handleCategoryClick,
      addProductToCart,
      removeItemFromCart,
      state,
    } = this;
    const { emptyCart, cartItems, inputValue, products, categories } = state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/shopping-cart"
              render={ () => (<ShoppingCart
                emptyCart={ emptyCart }
                cartItems={ cartItems }
                removeItemFromCart={ removeItemFromCart }
              />) }
            />
            <Route
              exact
              path="/"
              render={ () => (<Home
                addProductToCart={ addProductToCart }
                handleChange={ handleChange }
                handleSearchClick={ handleSearchClick }
                handleCategoryClick={ handleCategoryClick }
                categories={ categories }
                inputValue={ inputValue }
                products={ products }
              />) }
            />
            <Route
              path="/productDetails/:ship"
              render={ (props) => <ProductDetails { ...props } products={ products } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
