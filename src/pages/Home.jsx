import React from 'react';
import { Link } from 'react-router-dom';

// import * as api from '../services/api';

import './home.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <header className="home-header">
          <input type="text" placeholder="Digite algum termo de pesquisa" />
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart" />
          </Link>
        </header>

        <main>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </main>

        {
          // // Exibindo as categorias
          // api.getCategories()
          //   .then((categories) => console.log(categories))
        }
        {
          // // Estrutura para termo
          // api.getProductsFromCategoryAndQuery(null, 'cinta')
          //   .then((search) => console.log(search))
        }
        {
          // // Estrutura para id de categoria
          // api.getProductsFromCategoryAndQuery('MLB1071')
          //   .then((categoryID) => console.log(categoryID))
        }
        {
          // // Estrutura para busca de id e termo
          // api.getProductsFromCategoryAndQuery("MLB1540", 'cinta')
          //   .then((categories) => console.log(categories))
        }
      </>
    );
  }
}

export default Home;
