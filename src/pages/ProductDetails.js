import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  formStructure() {
    return (
      <form>
        <div>
          <input type="email" placeholder="E-mail" required />
          <select required>
            <option value="5">
              5
            </option>
            <option value="4">
              4
            </option>
            <option value="3">
              3
            </option>
            <option value="2">
              2
            </option>
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div>
          <textarea rows="5" cols="30" data-testid="product-detail-evaluation" />
        </div>
      </form>
    );
  }
  render() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const image = params.get('image');
    const price = params.get('price');
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ image } alt={ title } />
        <h4>
          Preço: $
          {' '}
          {price}
          {this.formStructure()}
        </h4>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
