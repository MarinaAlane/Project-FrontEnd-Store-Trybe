import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
// import PropTypes from 'prop-types';
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
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <aside>
          { this.renderCategory() }
        </aside>
        <input type="text" />
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de compras
        </Link>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default ProductList;

// ProductList.PropTypes = {
//   categories: PropTypes.
// }
