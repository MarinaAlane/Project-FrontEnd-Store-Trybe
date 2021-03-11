import React from 'react';
import Search from '../components/Search';
import ProductsList from '../components/ProductList';

class MainPage extends React.Component {
  render() {
    return (
      <main>
        <Search />
        <ProductsList />
      </main>
    );
  }
}

export default MainPage;
