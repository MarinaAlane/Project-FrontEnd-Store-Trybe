import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemDetails extends Component {
  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;
    return (
      <main>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <div>
          <p>{ price }</p>
          <p>detalhes do item</p>
        </div>
      </main>
    );
  }
}

ItemDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
};

export default ItemDetails;
