import React from 'react';
import PropTypes from 'prop-types';

class DetailedDisplay extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      id,
      product: false,
    };

    this.getProductDetail = this.getProductDetail.bind(this);
    this.productDetails = this.productDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetail();
  }

  getProductDetail() {
    const { id } = this.state;
    this.getProductDetails(id)
      .then((response) => this.setState({
        product: response,
      }));
  }

  async getProductDetails(id) {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    return response;
  }

  productDetails() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        <h3 data-testid="product-detail-name">{`${title} - R$${price}`}</h3>
        <img src={ thumbnail } alt="product" />
        <div>
          {attributes.map(
            ({ id, name, value_name: value }) => (
              <li key={ id }>{`${name}: ${value}`}</li>),
          )}
        </div>

      </div>
    );
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        {product && this.productDetails()}
      </div>
    );
  }
}

DetailedDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default DetailedDisplay;
