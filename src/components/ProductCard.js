import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

require('./ProductCard.css');

export default class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      redirectTo: '',
    };

    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails(event) {
    const { keyCode, type } = event;
    const enterKeyCode = 13;

    if (type === 'keydown' && keyCode !== enterKeyCode) {
      return false;
    }

    const { id } = this.props;

    this.setState({
      redirectTo: id,
    });
  }

  render() {
    const { title, thumbnail, price } = this.props;
    const { redirectTo } = this.state;

    if (redirectTo !== '') {
      return <Redirect to={ `/product-details/${redirectTo}` } />;
    }

    return (
      <div
        tabIndex="0"
        className="product-card"
        data-testid="product"
        onClick={ this.goToDetails }
        onKeyDown={ this.goToDetails }
        role="button"
      >
        <section className="title-card">
          <p>{ title }</p>
        </section>
        <section className="body-card">
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
        </section>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
};

ProductCard.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
};
