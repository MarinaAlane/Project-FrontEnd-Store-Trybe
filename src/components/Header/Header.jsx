import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingCartSVG } from '../../assets/shopping-cart-solid.svg';
import Button from '../Button';

export default class Header extends Component {
  render() {
    return (
      <header>
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
