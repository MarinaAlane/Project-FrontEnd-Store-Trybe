import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from './ListCategories';
// import ProductDetais from './ProductDetais';
import Card from '../components/Card';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: '',

    };

    this.fetchProductsByQuery = this.fetchProductsByQuery.bind(this);
    this.fetchProductsByCategoryId = this.fetchProductsByCategoryId.bind(this);
    this.hendleChange = this.hendleChange.bind(this);
    this.inputButton = this.inputButton.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder += 1;
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
      } else {
        product = { ...product, quantityToOrder: 1 };
        const itemsToAdd = [...itemsInCart, product];
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
      }
    }
  }

  async fetchProductsByQuery() {
    const { search } = this.state;
    const items = await getProductsFromCategoryAndQuery(false, search);
    this.setState({
      products: items.results,
    });
  }

  async fetchProductsByCategoryId(categoryId) {
    const items = await getProductsFromCategoryAndQuery(categoryId, false);
    this.setState({
      products: items.results,
    });
  }

  hendleChange(event) {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  }

  inputButton() {
    return (
      <>
        <input type="text" data-testid="query-input" onChange={ this.hendleChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.fetchProductsByQuery() }
        >
          Pesquisar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            src="https://www.pinclipart.com/picdir/big/10-108329_cart-clip-art-at-clker-com-vector-shopping.png"
            alt="cart"
            className="button"
          />
        </Link>
      </>
    );
  }

  render() {
    const { products } = this.state;

    if (products.length === 0) {
      return (
        <>
          { this.inputButton() }
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <ListCategories onChange={ this.fetchProductsByCategoryId } />
        </>
      );
    }

    return (
      <div>
        { this.inputButton() }
        {products
          .map((product) => (
            <Card
              product={ product }
              key={ product.id }
              handleAddClick={ this.handleAddClick }
            />
          ))}
        <ListCategories onChange={ this.fetchProductsByCategoryId } />
      </div>
    );
  }
}

export default LandingPage;
