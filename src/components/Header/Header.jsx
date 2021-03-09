import React, { Component } from 'react';
import { ReactComponent as ShoppingCartSVG } from '../../assets/shopping-cart-solid.svg';
import Button from '../Button';
import SearchBar from '../SearchBar';

export default class Header extends Component {
  render() {
    return (
      <header>
        <SearchBar />
        <Button submit={ false } id="shopping-cart-button">
          <ShoppingCartSVG />
        </Button>
      </header>
    );
  }
}
