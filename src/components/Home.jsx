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
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.fetchApiSearch = this.fetchApiSearch.bind(this);
  }

  handleSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  async fetchApiSearch() {
    const { searchText } = this.state;
    const fetchList = await api.getProductsFromCategoryAndQuery("", searchText);

    if(!fetchList.results.length) {
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
    const { productsList, showMessage } = this.state;
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

        <ListOfCategories />

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
