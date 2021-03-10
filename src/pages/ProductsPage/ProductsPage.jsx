import React, { Component, useContext } from 'react';
import CartProduct from '../../components/Product/Product';
import * as api from '../../services/api';
import InputContext from '../../components/InputContext';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    const { inputValue } = useContext;
    this.state = {
      product: [],
      loading: true,
      inputValue,
    };
    this.fetchAds = this.fetchAds.bind(this);
  }

  componentDidMount() {
    this.fetchAds();
  }

  fetchAds() {
    const { inputValue } = this.state;
    api.getProductsFromCategoryAndQuery('', inputValue)
      .then((term) => this.setState({ product: term, loading: false }));
  }

  render() {
    const { product, loading } = this.state;
    return loading ? <p>loading</p> : (
      <InputContext.Consumer>
        {({ inputValue }) => (
          <div>
            <p>{ inputValue }</p>
            {product.results.map((term) => (<CartProduct
              key={ term.id }
              product={ term }
            />))}
          </div>
        )}

      </InputContext.Consumer>
    );
  }
}

export default ProductsPage;
