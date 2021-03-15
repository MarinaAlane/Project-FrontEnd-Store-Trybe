import React from 'react';
import CartButton from '../components/CartButton';
import ProductList from '../components/ProductList';

class InitialPage extends React.Component {
  render() {
    return (
      <div className="App">
        <CartButton />
        <ProductList />
      </div>
    );
  }
}

export default InitialPage;
