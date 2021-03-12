import React, { Component } from 'react';
import Product from '../../components/Product';
import * as api from '../../services/api';
import InputContext from '../../components/InputContext';
import StateContext from '../../components/StateContext';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: true,
      inputValue: '',
      category: '',
      productID: [],
    };
    this.fetchAds = this.fetchAds.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { inputValue: stateInput, category: stateCategory } = this.state;
    const { inputValue: contextInput, selectedCategory: contextCategory } = this.context;
    if (stateInput !== contextInput || stateCategory !== contextCategory) {
      console.log('teste');
      this.fetchAds(contextCategory, contextInput);
    }
  }

  handleClick(index) {
    const element = document.getElementsByTagName('span');
    this.setState((prevState) => ({ productID: [...prevState.productID,
      element[index].innerText] }));
  }

  fetchAds(category, inputValue) {
    api.getProductsFromCategoryAndQuery(category, inputValue)
      .then((term) => (
        this.setState({ product: term, loading: false, inputValue, category })
      ));
  }

  render() {
    const { product, loading, productID } = this.state;
    return (
      <StateContext.Provider value={ productID }>
        <InputContext.Consumer>
          {
            () => (
              loading
                ? <p>loading</p>
                : (
                  <div>
                    {product.results.map((term, index) => (
                      <div key={ term.id } className="product">
                        <Product
                          product={ term }
                        />
                        <button
                          data-testid="product-add-to-cart"
                          type="button"
                          className="add-to-cart-btn"
                          onClick={ () => this.handleClick(index) }
                        >
                          Adicionar ao carrinho
                        </button>
                      </div>
                    ))}
                  </div>
                )
            )
          }
        </InputContext.Consumer>
      </StateContext.Provider>
    );
  }
}

ProductsPage.contextType = InputContext;

export default ProductsPage;
