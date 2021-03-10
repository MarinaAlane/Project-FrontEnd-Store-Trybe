import React, { Component } from 'react';

class ItemDetails extends Component {
  render() {
    const { location: { state: { item } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{item.title}</h2>
      </div>
    );
  }
}

export default ItemDetails;
