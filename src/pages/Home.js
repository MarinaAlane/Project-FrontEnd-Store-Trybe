import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import ProductCategories from '../components/ProductCategories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <ProductCategories />
      </div>
    );
  }
}

export default Home;
