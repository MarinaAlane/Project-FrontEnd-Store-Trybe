import React from 'react';
import { Link } from 'react-router-dom';
import ListOfCategories from './ListOfCategories';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      productsList: [],
      categories: [],
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.fetchApiSearch = this.fetchApiSearch.bind(this);
    this.fetchByCategoryId = this.fetchByCategoryId.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((response) => this.setState({ categories: response }));
  }

  handleSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  async fetchByCategoryId(categoryId) {
    // console.log(categoryId);
    const fetchList = await api.getProductsFromCategoryAndQuery(categoryId, '');
    // console.log(fetchList);
    this.setState({
      productsList: fetchList.results,
    });
  }

  async fetchApiSearch() {
    const { searchText } = this.state;
    const fetchList = await api.getProductsFromCategoryAndQuery('', searchText);

    if (!fetchList.results.length) {
      this.setState({
        showMessage: true,
      });
    } else {
      this.setState({
        productsList: fetchList.results,
        showMessage: false,
      });
    }
  }

  render() {
    const { productsList, showMessage, categories } = this.state;
    const emptySearchMessage = <p>Nenhum produto foi encontrado</p>;

    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.handleSearchTextChange }
          onClickSearch={ this.fetchApiSearch }
        />

        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <ListOfCategories
          categories={ categories }
          onClickSelectedCategory={ this.fetchByCategoryId }
        />

        {
          showMessage ? emptySearchMessage : <ProductCard
            products={ productsList }
          />
        }

        <button type="button">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
