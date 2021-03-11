import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Api from '../services/api';
import ShortProduct from './ShortProduct';

class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.loadApi = this.loadApi.bind(this);
  }

  componentDidMount() {
    this.loadApi();
  }

  async loadApi() {
    const { categoryId, query } = this.props;
    const products = await Api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { products } = this.state;

    if (products.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }

    return (
      <div>
        {products.map((product) => (<ShortProduct
          key={ product.id }
          title={ product.title }
          thumbnail={ product.thumbnail }
          price={ product.price }
        />)) }
      </div>
    );
  }
}

ListProducts.propTypes = ({
  categoryId: PropTypes.string,
  query: PropTypes.string,
}).isRequired;

export default ListProducts;
