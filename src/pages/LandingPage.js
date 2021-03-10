import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.fetchProductsByQuery = this.fetchProductsByQuery.bind(this);
  }

  async fetchProductsByQuery(query) {
    const items = await getProductsFromCategoryAndQuery(false, query);
    // console.log(items);
    this.setState({
      products: items.results,
    });
  }

  render() {
    this.fetchProductsByQuery('computador');
    return (
      <div>
        <input type="text" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default LandingPage;
