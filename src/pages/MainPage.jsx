import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import ProductsList from '../components/ProductList';
import CartIcon from '../images/carrinho.png';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <header>
          <Search />
          <Link data-testid="shopping-cart-button" to="/cartPage">
            <img src={ CartIcon } alt="cart" />
          </Link>
        </header>
        <main>
          <ProductsList />
        </main>
      </>
    );
  }
}

export default MainPage;
