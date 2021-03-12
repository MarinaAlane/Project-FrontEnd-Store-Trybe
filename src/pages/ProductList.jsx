import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getProductsAndOrCategory = this.getProductsAndOrCategory.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);

    this.state = {
      products: [],
      searchText: '',
      categoryId: '',
    };
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  getCategoryId(categoryId) {
    this.setState({
      categoryId,
    }, () => this.getProductsAndOrCategory());
  }

  async getProductsAndOrCategory() {
    const { categoryId, searchText } = this.state;
    try {
      const response = await api.getProductsFromCategoryAndQuery(categoryId, searchText);
      const productArray = response.results;
      this.setState({
        products: productArray,
      });
    } catch (error) {
      console.log(`Erro ao consultar API do mercado livre --- ${error}`);
    }
  }

  render() {
    const { products, searchText } = this.state;
    const mensagem = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div className="product-list">
        <SearchBar
          value={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          getProducts={ () => this.getProductsAndOrCategory() }
        />

        <CategoryList getCategoryId={ this.getCategoryId } />

        <div className="product-container">
          { (products.length > 0)
            ? products.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
              />
            ))
            : <p data-testid="home-initial-message">{ mensagem }</p> }
        </div>
      </div>
    );
  }
}

export default ProductList;
