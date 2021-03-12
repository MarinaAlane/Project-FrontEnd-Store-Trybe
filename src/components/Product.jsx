import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render() {
        const { array } = this.props;
        const { title, price, thumbnail } = array;
        return (
            <div data-testid="product">
                <img src={thumbnail} alt={title} />
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
        );
    }
}
Product.propTypes ={
    products: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
    }).isRequired,
};

export default Product;