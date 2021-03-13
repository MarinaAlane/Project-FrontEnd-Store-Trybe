import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      categories: [],
      productsInput: '',
      categoriesInput: '',
      shoppingCart: [],
      loaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSearchResult = this.checkSearchResult.bind(this);
    this.addOnCart = this.addOnCart.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.checkStorage();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { productsInput, categoriesInput } = this.state;
    api.getProductsFromCategoryAndQuery(categoriesInput, productsInput)
      .then((products) => this.setState({
        productList: products.results,
        loaded: true,
      }));
  }

  addOnCart(title, id, price, availableQuantity) {
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, { title, id, price, availableQuantity }],
    }), () => {
      const { shoppingCart } = this.state;
      sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    });
  }

  checkSearchResult() {
    const { productList, loaded } = this.state;
    if (productList <= 0 && loaded) {
      return (
        <h3>Nenhum produto foi encontrado</h3>
      );
    }
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  mapCategory() {
    const { categories, categoriesInput } = this.state;
    return categories.map(
      ({ id, name }) => (
        <label key={ id } data-testid="category" htmlFor={ id }>
          <input
            type="checkbox"
            name="categoriesInput"
            id={ id }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value={ name }
            checked={ categoriesInput === name }
          />
          { name }
        </label>
      ),
    );
  }

  checkStorage() {
    if (sessionStorage.shoppingCart) {
      const cart = JSON.parse(sessionStorage.shoppingCart);
      this.setState({
        shoppingCart: [...cart],
      });
    }
  }

  renderProductList() {
    const { productList } = this.state;
    return (
      productList
        .map(({ id,
          title,
          price,
          thumbnail,
          attributes,
          available_quantity: availableQuantity,
          shipping: { free_shipping: freeShipping },
        }) => (
          <div key={ id } data-testid="product">
            <h3>{ title }</h3>
            {freeShipping && <p data-testid="free-shipping">Frete grátis</p>}
            <img src={ thumbnail } alt={ title } />
            <p>
              R$
              { price }
            </p>
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: `/productdetails/${id}`,
                state: {
                  id,
                  title,
                  price,
                  thumbnail,
                  attributes,
                  availableQuantity,
                  freeShipping },
              } }
            >
              Detalhes do Produto
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.addOnCart(title, id, price, availableQuantity) }
            >
              Adicionar ao Carrinho
            </button>

          </div>
        ))
    );
  }

  render() {
    const { productsInput, productList, shoppingCart } = this.state;
    return (
      <div>
        <aside>
          <div>
            { this.mapCategory() }
          </div>
        </aside>
        <Link to="/shoppingCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            ShoppingCart
            <span data-testid="shopping-cart-size">{` - ${shoppingCart.length}`}</span>
          </button>
        </Link>

        <input
          type="text"
          placeholder="Digite aqui"
          value={ productsInput }
          onChange={ this.handleChange }
          data-testid="query-input"
          name="productsInput"
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Pesquise o Produto
        </button>

        {
          (productList.length > 0)
            ? this.renderProductList() : this.checkSearchResult()
        }

      </div>
    );
  }
}

export default Home;
