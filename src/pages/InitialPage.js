import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';

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
          <Categories />
        </section>
      </div>
    );
  }
}

export default InitialPage;
