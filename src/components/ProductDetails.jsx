import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);

    this.state = {
      attributes: [],
      title: '',
      pictures: '',
      price: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`);
    const json = await response.json();
    const { attributes } = json;
    const { title } = json;
    const pictures = json.pictures[0].url;
    const { price } = json;
    this.setState({
      attributes,
      title,
      pictures,
      price,
    });
    return json;
  }

  render() {
    const { attributes, title, pictures, price } = this.state;
    return (
      <div>
        <div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button"> Cart </Link>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <h2>
            R$
            { price }
          </h2>
        </div>
        <img src={ pictures } alt="product" />
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            { attributes.map((currentValue) => (
              <li key={ currentValue.id }>
                { currentValue.name }
              </li>)) }
          </ul>
        </div>
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

export default ProductDetails;
