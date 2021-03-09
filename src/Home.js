import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <MainPage />
      </>
    );
  }
}

export default Home;
