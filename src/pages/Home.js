import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

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
    return (
      <div>
        <Header onChangeProducts={ (newProducts) => this.handleProducts(newProducts) } />
        <Main products={ products } />
      </div>
    );
  }
}

export default Home;
