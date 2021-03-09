import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Input from './input';

const Home = () => (
  <div>
    <Input />
    <Link to="/emptyCart"><FontAwesomeIcon icon={ faShoppingCart } /></Link>
  </div>
);

export default Home;
