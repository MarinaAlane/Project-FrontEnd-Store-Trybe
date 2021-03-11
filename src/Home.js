import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categorias from './Categorias';
import ProductList from './ProductList';
import * as api from './services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      queryInput: '',
      categorySelector: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
    this.categoriesFetch = this.categoriesFetch.bind(this);
    this.categoriesFilter = this.categoriesFilter.bind(this);
  }

  componentDidMount() {
    this.categoriesFetch();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      queryInput: value,
    });
  }

  categoriesFilter({ target }) {
    const categoryId = target.id;
    this.setState({
      categorySelector: categoryId,
    }, () => this.fetchSearch());
  }

  async categoriesFetch() {
    const results = await api.getCategories();
    this.setState({
      categories: results,
    });
  }

  fetchSearch() {
    const { queryInput, categorySelector } = this.state;
    this.setState({}, async () => {
      const results = await api.getProductsFromCategoryAndQuery(
        categorySelector,
        queryInput,
      );
      const listProducts = results.results;
      this.setState({
        products: listProducts,
      });
    });
  }

  render() {
    const { queryInput, products, categories } = this.state;
    const { addProduct, listProducts } = this.props;
    return (
      <section>
        <label htmlFor="Digite" data-testid="home-initial-message">
          <input
            type="text"
            value={ queryInput }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Categorias categories={ categories } onClick={ this.categoriesFilter } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchSearch }
        >
          Procurar
        </button>
        {(products.length > 0) ? <ProductList
          products={ products }
          listProducts={ listProducts }
          addProduct={ addProduct }
        />
          : <p>Nenhum produto foi encontrado</p>}
        <Link to="/shoppingcart" data-testid="shopping-cart-button">CARRINHO</Link>
      </section>
    );
  }
}

Home.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Home;
