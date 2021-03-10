import React from 'react';
import * as api from '../services/api';
import ListCategories from './ListCategories';
import RenderElements from './RenderElements';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promisse: false,
      categories: '',
    };
    this.getCategories = this.getCategories.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  async getCategories() {
    const categories = await api.getCategories().then((data) => this.setState({
      categories: data,
      promisse: true,
    }));
    console.log(categories);
    return categories;
  }

  async getProducts(categoryId, query) {
    await api.getProductsFromCategoryAndQuery(categoryId, query);
  }

  render() {
    const { promisse, categories } = this.state;
    if (promisse === true) {
      return (
        <div>
          <RenderElements />
          <div>
            <ListCategories categories={ categories } />
          </div>
        </div>
      );
    }
    return (
      <RenderElements />
    );
  }
}

export default Home;
