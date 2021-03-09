import React from 'react';
import Header from '../../components/Header';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default HomePage;
