import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';
import AllCategories from './AllCategories';
import ShoppingCartBtn from './ShoppingCartBtn';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <ShoppingCartBtn />
        <MainPage />
        <AllCategories />
      </>
    );
  }
}

export default Home;
