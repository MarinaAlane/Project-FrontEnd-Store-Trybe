import React from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      categoryId: '',
      query: '',
      products: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidMount() {
    this.handleSearchClick();
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  handleSearchClick() {
    this.fetchProducts();
  }

  handleCategoryClick(id) {
    this.setState({
      categoryId: id,
    });
  }

  async fetchProducts() {
    const { categoryId, query } = this.state;
    const requestProducts = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      loading: false,
      products: requestProducts.results,
    });
  }

  initialMsg() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }

  render() {
    const { products, loading } = this.state;

    if (loading) return <span>Loading...</span>;

    return (
      <div>
        <SearchBar onChange={ this.handleChange } onClick={ this.handleSearchClick } />
        {products ? products.map(({ id, title, thumbnail, price }) => (<ProductCard
          key={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />)) : this.initialMsg()}
      </div>
    );
  }
}

export default ProductList;
