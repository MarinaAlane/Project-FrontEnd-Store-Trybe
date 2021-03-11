import React, { Component } from 'react';
import Product from '../../components/Product/Product';
import * as api from '../../services/api';
import InputContext from '../../components/InputContext';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: true,
      inputValue: '',
      category: '',
    };
    this.fetchAds = this.fetchAds.bind(this);
  }

  componentDidUpdate() {
    const { inputValue: stateInput, category: stateCategory } = this.state;
    const { inputValue: contextInput, selectedCategory: contextCategory } = this.context;
    if (stateInput !== contextInput || stateCategory !== contextCategory) {
      console.log('teste');
      this.fetchAds(contextCategory, contextInput);
    }
  }

  fetchAds(category, inputValue) {
    api.getProductsFromCategoryAndQuery(category, inputValue)
      .then((term) => (
        this.setState({ product: term, loading: false, inputValue, category })
      ));
  }

  render() {
    const { product, loading } = this.state;

    return (
      <InputContext.Consumer>
        {
          () => (
            loading
              ? <p>loading</p>
              : (
                product.results.map((term) => (<Product
                  key={ term.id }
                  product={ term }
                />))
              )
          )
        }
      </InputContext.Consumer>
    );
  }
}

ProductsPage.contextType = InputContext;

export default ProductsPage;
