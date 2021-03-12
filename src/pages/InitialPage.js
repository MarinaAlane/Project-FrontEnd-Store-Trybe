import React from 'react';
import CartButton from '../components/CartButton';
import Category from '../components/Categories';
import ProductItem from './ProductItem';

class InitialPage extends React.Component {
  render() {
    return (
      <div className="App">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
        <section>
          <Category />
        </section>
        <section>
        <ProductItem />
        </section>
      </div>
    );
  }
}

export default InitialPage;
