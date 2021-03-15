import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import ProductCategories from '../components/ProductCategories';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleProducts(products) {
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    const showInput = true;
    return (
      <div>
        <Header
          showInput={ showInput }
          onChangeProducts={ (newProducts) => this.handleProducts(newProducts) }
        />
        <Main products={ products } />
        <ProductCategories />
      </div>
    );
  }
}

export default Home;
