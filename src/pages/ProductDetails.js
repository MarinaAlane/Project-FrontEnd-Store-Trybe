import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const { history: { location: { state } } } = this.props;
    this.setState({
      product: state,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{product.title}</h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: {},
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
