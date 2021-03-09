import React, { Component } from 'react';

import FilterCategories from '../components/FilterCategories';
import CartButton from '../components/CartButton';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <CartButton />
        <FilterCategories />
      </>
    );
  }
}

export default HomePage;
