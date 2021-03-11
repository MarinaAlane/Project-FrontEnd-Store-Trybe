import React from 'react';
import PropTypes from 'prop-types';
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

  // validando push

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

Home.propTypes = {
  sentProducts: PropTypes.func.isRequired,

}.isRequired;

export default Home;
