import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/ProductList.css';

class ProductCard extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {
          products
            .map(({ id, title, thumbnail, price }) => (
              <div className="product" data-testid="product" key={ id }>
                <p>{ title }</p>
                <img src={ thumbnail } alt="produto" />
                <p>{ price }</p>
              </div>))
        }
      </div>
    );
  }
}

ProductCard.proptypes = {
  // products: PropTypes.array,
};

export default ProductCard;
