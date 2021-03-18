import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCategory from '../components/ProductCategory';
import ProductCard from '../components/ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      productList: [],
      renderCategories: false,
      renderProductList: false,
      searchBar: '',
      selectedCategory: '',
      cartProducts: [],
    };
    this.handleCategories = this.handleCategories.bind(this);
    this.searchBarHandler = this.searchBarHandler.bind(this);
    this.searchButtonHandler = this.searchButtonHandler.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleCategories({ target: { value } }) {
    const { searchBar } = this.state;
    this.setState({ selectedCategory: value });
    this.fetchProductList(value, searchBar);
  }

  searchBarHandler({ target: { value } }) {
    this.setState({ searchBar: value });
  }

  searchButtonHandler() {
    const { selectedCategory, searchBar } = this.state;
    this.fetchProductList(selectedCategory, searchBar);
  }

  addProductToCart(product) {
    const { cartProducts } = this.state;
    if (cartProducts.some((cartProduct) => cartProduct.id === product.id)) {
      const newCart = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      });
      this.setState({ cartProducts: newCart });
    } else {
      product.quantity = 1;
      this.setState((state) => ({
        cartProducts: [...state.cartProducts, product],
      }));
    }
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories, renderCategories: true });
  }

  async fetchProductList(categoryId, query) {
    const { results } = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ productList: results, renderProductList: true });
  }

  renderCategory() {
    const { renderCategories, categories } = this.state;
    if (renderCategories) {
      return categories.map(
        (item) => (<ProductCategory
          key={ item.id }
          category={ item }
          onChange={ this.handleCategories }
        />),
      );
    }
  }

  renderProducts() {
    const { renderProductList, productList, cartProducts } = this.state;
    if (!renderProductList) {
      return (
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      );
    }
    if (productList.length === 0) {
      return (
        <h1>Nenhum produto foi encontrado</h1>
      );
    }
    if (productList) {
      return (
        productList.map((product) => (
          <div key={ product.id }>
            <ProductCard
              key={ product.id }
              product={ product }
              cartProducts={ cartProducts }
              onClick={ this.addProductToCart }
            />
          </div>
        ))
      );
    }
  }

  render() {
    const { searchBar, cartProducts } = this.state;
    return (
      <div className="main-page">
        <aside className="categories-list">
          { this.renderCategory() }
        </aside>
        <div className="product-list">
          <input
            data-testid="query-input"
            className="main-search"
            type="text"
            value={ searchBar }
            onChange={ this.searchBarHandler }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.searchButtonHandler }
          >
            Search
          </button>
          <Link
            data-testid="shopping-cart-button"
            to={ {
              pathname: '/shopping-cart',
              state: { cartProducts },
            } }
          >
            Carrinho de compras
          </Link>
          <div>
            { this.renderProducts() }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
