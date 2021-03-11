import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';
import ProductsList from './ProductsList';
import AllCategories from './AllCategories';
import ShoppingCartBtn from './ShoppingCartBtn';
import * as api from './api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
      productsArrive: false,
      category: '',
      query: '',
    };

    this.getProducts = this.getProducts.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
  }

  getProducts(productsFromApi, inputValue) {
    this.setState({
      products: productsFromApi,
      productsArrive: true,
      query: inputValue,
    });
  }

  async filterCategory({ target: { id } }) {
    const { query } = this.state;
    console.log('teste01');
    const productsFromCategory = await api.getProductsFromCategoryAndQuery(id, query);
    this.setState({
      products: productsFromCategory,
      category: id,
      productsArrive: true,
    });
  }

  render() {
    const { products, productsArrive, category } = this.state;
    return (
      <>
        <SearchBar category={ category } sentProducts={ this.getProducts } />
        <ShoppingCartBtn />
        <AllCategories onClick={ this.filterCategory } />
        { productsArrive
          ? <ProductsList productsList={ products } />
          : <MainPage /> }
      </>
    );
  }
}

export default Home;
