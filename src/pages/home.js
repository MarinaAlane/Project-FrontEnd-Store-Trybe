import React from 'react';
import { Link } from 'react-router-dom';
import * as apis from '../services/api';
import '../styles/pages/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.apiRequest = this.apiRequest.bind(this);
  }

  componentDidMount() {
    this.apiRequest();
  }

  async apiRequest() {
    const { getCategories } = apis;
    const result = await getCategories();
    this.setState({
      categories: [...result],
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <header className="home-header-container">
          <div className="search-bar-container">
            <input className="App" type="text" />
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <button type="button" alt="cart-button" />
          </Link>
        </header>
        <aside className="categories-content">
          <ul className="list-categories">
            {categories.map((categoria) => (
              <li data-testid="category" key={ categories.id }>
                { categoria.name }
              </li>))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Home;
