import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ShoppingCartButton from './ShoppingCartButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ShoppingCartButton />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">CARRINHO</Link>
      </div>
    );
  }
}
export default Home;
