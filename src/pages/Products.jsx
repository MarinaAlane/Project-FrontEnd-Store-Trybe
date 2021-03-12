import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';


class Products extends React.Component {
    render() {
        const { product: { title, price, thumbnail } } = this.props;
        return(
            <div data-testid="product">
                <h2>{ title }</h2>
                <img src={ thumbnail } alt="img" />
                <p>{ price }</p>
            </div>
        );
    }
}

Products.propTypes ={
    products: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
    }).isRequired,
};

export default Products;
