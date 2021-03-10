import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RatingForm from '../components/RatingForm';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getProductId();
  }

  async getProductId() {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const { title, attributes, thumbnail, price } = await fetch(url)
      .then((response) => response.json());
    this.setState({
      title,
      attributes,
      thumbnail,
      price,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div>Loading...</div>
      );
    }
    const { title, attributes, thumbnail, price } = this.state;
    return (
      <div>
        <div className="productContainer">
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                { `${attribute.name} -> ${attribute.value_name}` }
              </li>
            ))}
          </ul>
        </div>
        <RatingForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
