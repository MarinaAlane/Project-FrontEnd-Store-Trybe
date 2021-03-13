import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import Main from '../components/Main';
import Aside from '../components/Aside';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      productsFromQuery: [{}],
      isFetchingFromQuery: false,
    };
    this.getProductsFromQuery = this.getProductsFromQuery.bind(this);
  }

  async componentDidMount() {
    await getCategories()
      .then((data) => this
        .setState((lastState) => ({
          ...lastState,
          categories: data,
          loading: false,
        })));
  }

  async getProductsFromQuery(query) {
    const data = await getProductsFromCategoryAndQuery('', query);
    this.setState((lastState) => ({
      ...lastState,
      productsFromQuery: data.results,
      isFetchingFromQuery: true,
    }));
  }

  render() {
    const { categories, productsFromQuery, isFetchingFromQuery } = this.state;
    return (
      <>
        <Header getProductsFromQuery={ this.getProductsFromQuery } />
        <Main
          productsFromQuery={ productsFromQuery }
          isFetchingFromQuery={ isFetchingFromQuery }
        />
        <Aside categories={ categories } />
      </>
    );
  }
}

export default MainPage;
