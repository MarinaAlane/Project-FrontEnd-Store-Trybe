import React from 'react';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList/CategoryList';
import SearchForTerms from '../../components/SearchBarForTerms/SearchForTerms';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <CategoryList />
        <Header />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchForTerms />
      </>
    );
  }
}

export default HomePage;
