import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import '../CSS/ProductList.css';

class ProductCard extends React.Component {
  render() {
    const { products, onClick } = this.props;
    return (
      <div>
        {
          products
            .map(({ id, title, thumbnail, price }) => (
              <div className="product" data-testid="product" key={ id }>
                <p>{ title }</p>
                <img src={ thumbnail } alt="produto" />
                <p>{ price }</p>
                <button
                  data-testid="product-add-to-cart"
                  type="button"
                  onClick={ () => onClick(id) }
                >
                  {/* <Redirect
                    to="/shopping-cart"
                  /> */}
                  Comprar
                </button>
              </div>))
        }
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};

export default ProductCard;
