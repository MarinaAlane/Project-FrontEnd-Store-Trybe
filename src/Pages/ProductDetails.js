import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';
import { Link } from 'react-router-dom';
import ButtonShoppingCart from '../components/ButtonShoppingCart';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: 0,
      title: '',
      thumbnail: '',
      price: '',
      loading: true,
    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const requestProduct = await getProduct(id);
    this.setState({
      // id: requestProduct.id,
      title: requestProduct[0].body.title,
      thumbnail: requestProduct[0].body.thumbnail,
      price: requestProduct[0].body.price,
      attributes: requestProduct[0].body.attributes,
      loading: false,
    });
  }

  render() {
    const { title, thumbnail, price, attributes, loading } = this.state;

    if (loading) return <p>Carregando...</p>;

    return (
      <div>
        <Link to="/shopping-cart">
          <ButtonShoppingCart />
        </Link>

        <div data-testid="product-detail-name">
          <h2>{title}</h2>
          <img alt="" src={ thumbnail } />
          <h3>{`R$ ${price}`}</h3>
          <ol>
            {attributes.length > 0 && attributes.map(({ id, name, values }) => (
              <li key={ id }>{`${name} : ${values[0].name}`}</li>))}
          </ol>
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
