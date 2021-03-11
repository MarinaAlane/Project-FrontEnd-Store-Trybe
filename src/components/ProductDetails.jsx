import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.productRender = this.productRender.bind(this);
  }

  productRender() {
    const { location } = this.props;
    const { state } = location;
    const { title } = state;
    return (
      <div>
        <Link to="/shopping-cart">Carrinho</Link>
        <div data-testid="product-detail-name">
          {title}
        </div>
      </div>
    );
  }

  loading() {
    return <div> loading </div>;
  }

  render() {
    // const { productDetail } = this.state;
    console.log(this.props);
    return (
      <div>
        {this.productRender()}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
