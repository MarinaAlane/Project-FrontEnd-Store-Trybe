import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import '../styles/components/ProductDetails.css';
import '../styles/pages/ShoppingCart.css';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.getItemProduct = this.getItemProduct.bind(this);
  }

  componentDidMount() {
    this.getItemProduct();
  }

  getItemProduct() {
    const { match, products } = this.props;
    const { params } = match;
    const { ship } = params;
    const product = products.find((item) => item.id === ship);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    if (product === undefined) {
      return <Redirect to="/" />;
    }
    console.log(product);
    const { title, thumbnail, price } = product;

    return (
      <>
        <div className="cart-header-container">
          <Link to="/">
            <button type="button" alt="return-button" />
          </Link>
        </div>
        <div data-testid="product-detail-name" className="card">
          <div className="img-card">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="content-card">
            <p>{title}</p>
            <p>{price}</p>
          </div>
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  products: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ProductDetails;
