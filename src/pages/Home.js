import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import ProductCategories from '../components/ProductCategories';

class Home extends React.Component {
  render() {
    const showInput = true;
    return (
      <div>
        <Header showInput={ showInput } />
        <Main />
        <ProductCategories />
      </div>
    );
  }
}

export default Home;
