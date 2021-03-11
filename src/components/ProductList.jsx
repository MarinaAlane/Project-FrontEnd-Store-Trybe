import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import ProductCategory from './ProductCategory';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      renderCategories: false,
    };
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories, renderCategories: true });
  }

  renderCategory() {
    const { renderCategories, categories } = this.state;
    if (renderCategories) {
      return categories.map(
        (item) => (<ProductCategory
          key={ item.id }
          category={ item }
        />),
      );
    }
  }

  render() {
    return (
      <div className="main-page">
        <aside className="categories-list">
          { this.renderCategory() }
        </aside>
        <div className="product-list">
          <input className="main-search" type="text" />
          <Link
            data-testid="shopping-cart-button"
            to="/shopping-cart"
          >
            Carrinho de compras<img src="https://image.flaticon.com/icons/png/512/34/34562.png" alt="shopping cart" ></img>
          </Link>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </div>
      </div>
    );
  }
}

export default ProductList;
