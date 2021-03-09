import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';
import AllCategories from './AllCategories';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <MainPage />
        <AllCategories />
      </>
    );
  }
}

export default Home;
