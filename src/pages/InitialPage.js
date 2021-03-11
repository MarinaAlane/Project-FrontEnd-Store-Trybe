import React from 'react';
import CartButton from '../components/CartButton';

class InitialPage extends React.Component {
  render() {
    return (
      <div className="App">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
      </div>
    );
  }
}

export default InitialPage;
