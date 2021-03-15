import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import ProductCategories from '../components/ProductCategories';

//  Comentario para criar o PR

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
    const showSearchButton = true;
    return (
      <div>
        <Header
          showInput={ showInput }
          showSearchButton={ showSearchButton }
          onChangeProducts={ (newProducts) => this.handleProducts(newProducts) }
        />
        <Main products={ products } />
        <ProductCategories />
      </div>
    );
  }
}

export default Home;
