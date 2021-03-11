import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingCartSVG } from '../../assets/shopping-cart-solid.svg';
import Button from '../Button';
import SearchBar from '../SearchBar';
import InputContext from '../InputContext';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue({ target }) {
    this.setState({ inputValue: target.value });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <header>
        <InputContext.Consumer value={ inputValue }>
          {({ setInputValue }) => (
            <SearchBar
              getInputValue={ this.getInputValue }
              handleClick={ () => setInputValue(inputValue) }
            />
          )}
        </InputContext.Consumer>
        <Button submit={ false } id="shopping-cart-button" dataTestId={ false }>
          <Link to="/cart" data-testid="shopping-cart-button">
            <ShoppingCartSVG />
            Carrinho
          </Link>
        </Button>
      </header>
    );
  }
}
