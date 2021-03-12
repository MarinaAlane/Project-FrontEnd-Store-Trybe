import React from 'react';
import { Link } from 'react-router-dom';
import AsideMenu from '../components/AsideMenu';
import * as apis from '../services/api';
import '../styles/pages/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      menuActive: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.apiRequest = this.apiRequest.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    this.apiRequest();
  }

  handleMenuClick() {
    const { menuActive } = this.state;
    let menuStatus = true;
    if (menuActive) menuStatus = false;
    this.setState({
      menuActive: menuStatus,
    });
  }

  handleCategoryClick({ target }) {
    console.log(target.innerText);
  }

  async apiRequest() {
    const { getCategories } = apis;
    const result = await getCategories();
    this.setState({
      categories: [...result],
    });
  }

  render() {
    const { categories, menuActive } = this.state;
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
        <AsideMenu
          categories={ categories }
          menuActive={ menuActive }
          handleCategoryClick={ this.handleCategoryClick }
          handleMenuClick={ this.handleMenuClick }
        />
      </div>
    );
  }
}

export default Home;
