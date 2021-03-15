import React from 'react';
import * as ApiMercadoLivre from '../services/api';

class ProductCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [{ name: 'Carregando categorias', id: 'Carregando categorias' }],
    };
  }

  componentDidMount() {
    const ApiResponse = ApiMercadoLivre.getCategories();
    ApiResponse.then((response) => {
      this.setState({
        categories: response,
      });
    });
  }

  categoryItemList(category) {
    //  https://stackoverflow.com/questions/1229856/what-is-the-best-way-to-style-a-list-of-checkboxes
    //  https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox
    return (
      <li key={ category.id }>
        <input
          type="radio"
          name="category"
          id={ category.id }
        />
        <label htmlFor={ category.id } data-testid="category">{category.name}</label>
      </li>
    );
  }

  render() {
    const { categories } = this.state;
    return (
      <aside className="aside-categories">
        <h3>Categorias</h3>
        <ul>
          {categories.map((category) => this.categoryItemList(category))}
        </ul>
      </aside>
    );
  }
}

export default ProductCategories;
