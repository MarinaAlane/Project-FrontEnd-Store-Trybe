import React, { Component } from 'react';
import { getProductFromId } from '../services/api';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      item: {},
    };
    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
    this.fetchItem();
  }

  async fetchItem() {
    const { params } = this.props;
    const obj = await getProductFromId(params.id);
    this.setState({
      item: obj[0].body,
      loading: false,
    });
  }

  render() {
    const { item, loading } = this.state;
    if (loading) return <h3>Loading...</h3>;
    return (
      <div>
        <h2 data-testid="product-detail-name">{item.title}</h2>
      </div>
    );
  }
}

export default ItemDetails;
