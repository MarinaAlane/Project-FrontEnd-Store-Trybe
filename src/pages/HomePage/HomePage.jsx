import React from 'react';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList/CategoryList';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <CategoryList />
        <Header />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default HomePage;
