import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import InputContext from './components/InputContext';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      setInputValue: this.setInputValue.bind(this),
    };
  }

  setInputValue(inputValue) {
    console.log(`Input recebido como param: ${inputValue}`);
    if (inputValue) this.setState({ inputValue });
  }

  render() {
    const { inputValue, setInputValue } = this.state;
    return (
      <InputContext.Provider value={ { inputValue, setInputValue } }>
        <Router>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/cart" component={ CartPage } />
            <Route
              path="/details/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </Router>
      </InputContext.Provider>
    );
  }
}

export default App;
