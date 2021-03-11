import React from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getProducts = this.getProducts.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      products: [],
      searchText: '',
    };
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  async getProducts(categorie, query) {
    try {
      const response = await api.getProductsFromCategoryAndQuery(categorie, query);
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
          getProducts={ () => this.getProducts('', searchText) }
        />

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
