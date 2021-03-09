import React from 'react';
import SearchBar from './SearchBar';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}
export default HomePage;
