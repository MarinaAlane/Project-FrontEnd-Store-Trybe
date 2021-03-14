import React from 'react';
import AsideMenu from '../components/AsideMenu';
import ProductList from '../components/ProductList';
import * as api from '../services/api';
import '../styles/pages/Home.css';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      inputValue: '',
    };
    this.apiRequest = this.apiRequest.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.apiRequest();
  }

  async handleSearchClick() {
    const { inputValue } = this.state;
    let products = [];
    if (inputValue.length !== 0) {
      products = await api.getProductsFromCategoryAndQuery('', inputValue);
    } else {
      products = await api.getProductsFromCategoryAndQuery();
    }
    this.setState({
      products: products.results,
    });
  }

  handleChange({ target }) {
    this.setState({
      inputValue: target.value,
    });
  }

  async handleCategoryClick({ target }) {
    const { innerText } = target;
    const { categories } = this.state;
    const selectedCategory = categories.find((category) => category.name === innerText);
    const products = await api.getProductsFromCategoryAndQuery(selectedCategory.id, '');
    this.setState({
      products: products.results,
    });
  }

  async apiRequest() {
    const { getCategories, getProductsFromCategoryAndQuery } = api;
    const products = await getProductsFromCategoryAndQuery();
    const categories = await getCategories();
    if (products === undefined) {
      this.setState({
        categories,
      });
    } else {
      this.setState({
        categories,
        products: products.results,
      });
    }
  }

  render() {
    const { handleChange, handleSearchClick, handleCategoryClick, state } = this;
    const { categories, products, inputValue } = state;
    return (
      <div className="home-container">
        <AsideMenu
          categories={ categories }
          handleCategoryClick={ handleCategoryClick }
        />
        <div className="main-container">
          <SearchBar
            handleSearchClick={ handleSearchClick }
            handleChange={ handleChange }
            value={ inputValue }
          />
          <ProductList products={ products } />
        </div>
      </div>
    );
  }
}

export default Home;
