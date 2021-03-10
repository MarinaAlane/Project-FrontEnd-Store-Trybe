import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ItemDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.string,
    }),
  }).isRequired,
};

export default ItemDetails;
