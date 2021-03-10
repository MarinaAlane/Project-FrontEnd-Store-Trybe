// fetch api
// api.map => <itemCard>

import React, { Component } from 'react';
import * as api from '../services/api';
import ItemCard from './itemCard';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    const { category, searchText } = this.props;
    api
      .getProductsFromCategoryAndQuery(category, searchText)
      .then((list) => this.setState({ itemList: list }));
  }

  render() {
    const { results } = this.state.itemList;
    return (
    <div>
      {console.log(results)}
      {/* {results.map((item) => <ItemCard title={ item.title } price={ item.price } thumbnail={ item.thumbnail } />)} */}
    </div>
    );
  }
}

export default ItemList;
