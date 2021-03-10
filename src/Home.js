import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';
import ProductsList from './services/ProductsList';
import AllCategories from './AllCategories';
import ShoppingCartBtn from './ShoppingCartBtn';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      productsArrive: false,

    };

    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(productsFromApi) {
    this.setState({
      products: productsFromApi,
      productsArrive: true,

    });
  }

  render() {
    const { products, productsArrive } = this.state;
    return (
      <>
        <SearchBar sentProducts={ this.getProducts } />
        <ShoppingCartBtn />
        <AllCategories />
        { productsArrive
          ? <ProductsList productsList={ products } />
          : <MainPage /> }
      </>
    );
  }
}

export default Home;
