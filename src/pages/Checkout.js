import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewProducts from '../components/ReviewProducts';
import ClientsData from '../components/ClientsData';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Link to="/cart">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/reply-all-1578267-1341736.png"
            alt="arrow back"
            className="button"
          />
        </Link>
        <ReviewProducts />
        <ClientsData />
      </div>
    );
  }
}

export default Checkout;
