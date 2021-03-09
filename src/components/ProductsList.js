import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { query, categories } = this.props;
    api.getProductsFromCategoryAndQuery(categories, query)
      .then((products) => this.setState({
        productList: products.results,
      }));
  }

  renderProductList() {
    const { productList } = this.state;
    return (
      productList.map(({ id, title, price, thumbnail }) => (
        <div key={ id } data-testid="product">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </div>
      ))
    );
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Pesquise o Produto
        </button>
        {
          (productList.length > 0)
            ? this.renderProductList() : <h3>Nenhum produto foi encontrado</h3>
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string,
  categories: PropTypes.string,
};

ProductList.defaultProps = {
  query: '',
  categories: '',
};

export default ProductList;
