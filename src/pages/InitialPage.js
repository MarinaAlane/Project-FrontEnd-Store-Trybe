import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import ProductList from './ProductList';

class InitialPage extends React.Component {
  render() {
    return (
      <div className="App">
        <ProductList />
        <CartButton />
        <section>
          <Categories />
        </section>
      </div>
    );
  }
}

export default InitialPage;
