import React, { Component } from 'react';
import * as Api from '../services/api';
import SearchBar from '../components/SearchBar';
import CardProduct from '../components/ProductCard';
import CartButton from '../components/CartButton';
import CategoriesList from '../components/CategoriesList';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      query: '',
      categoryId: '',
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState((props) => ({
      ...props,
      query: value,
    }));
  }

  getProducts(categoryId) {
    const { query } = this.state;
    const result = Api.getProductsFromCategoryAndQuery(categoryId, query);
    result.then((res) => {
      this.setState((props) => ({
        ...props,
        products: res.results,
      }));
    });
  }

  async fetchCategories() {
    const categoriesResponse = await Api.getCategories();

    this.setState({ categories: categoriesResponse });
  }

  render() {
    const { query, categories, products } = this.state;

    return (
      <main>
        <header>
          <SearchBar
            query={ query }
            getProducts={ this.getProducts }
            handleChange={ this.handleChange }
          />
          <CartButton />
        </header>
        <CategoriesList categories={ categories } getProducts={ this.getProducts } />
        <CardProduct products={ products } />
      </main>
    );
  }
}

export default ProductList;
