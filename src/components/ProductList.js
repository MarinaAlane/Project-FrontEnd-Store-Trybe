import React from 'react';
import * as Api from '../services/api';
import '../App.css';
import ProductPage from './ProductPage';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      json: undefined,
      searchText: '',
    };

    this.changeText = this.changeText.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  async handleSearch() {
    const { searchText } = this.state;
    this.setState({ loading: true });
    const SearchJson = await Api
      .getProductsFromCategoryAndQuery('books', searchText);
    this.setState({
      loading: false,
      json: SearchJson,
    });
  }

  changeText(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }

  renderProducts(json) {
    const { results } = json;
    return (
      <section className="product-list">
        {results.length === 0
          ? <span>nenhum produto foi encontrado</span>
          : results
            .map((product) => <ProductPage key={ product.id } product={ product } />)}
      </section>
    );
  }

  render() {
    const { loading, json } = this.state;
    const checkLoading = !json ? <p> loading...</p> : this.renderProducts(json);
    return (
      <div className="home">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.changeText }
        />
        <button
          type="button"
          onClick={ this.handleSearch }
          data-testid="query-button"
        >
          Search
        </button>
        <div className="home-results">
          <span
            data-testid="home-initial-message"
            className="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          {!loading && !json ? null : checkLoading}
        </div>
      </div>
    );
  }
}

export default ProductList;
