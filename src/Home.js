import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';
import ShoppingCartBtn from './ShoppingCartBtn';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <ShoppingCartBtn />
        <MainPage />
      </>
    );
  }
}

export default Home;
