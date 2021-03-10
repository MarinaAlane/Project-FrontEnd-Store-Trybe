import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from './services/api';
import Categories from './Categories';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((res) => {
      console.log(res);
      this.setState = {
        categories: res,
      };
    });
  }

  render() {
    const message = (
      <h5
        data-testid="home-initial-message"
        className="defaultMessage"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h5>
    );
    const { categories } = this.state;
    return (
      <div>
        <input type="text" className="searchInput" />
        { message }
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="button-link"
        >
          Botão
        </Link>
        {
          categories.map((category) => (
            <label
              htmlFor={ category.id }
              data-testid="category"
              key={ category.id }
            >
              { category.name }
              <input
                type="radio"
                id={ category.id }
                key={ category.id }
              />
            </label>))
        }
      </div>
    );
  }
}
export default Home;
