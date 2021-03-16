import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as marketAPI from '../services/api';
import './AsideCategoriesList.css';

class AsideCategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.loadCategories = this.loadCategories.bind(this);
  }

  componentDidMount() {
    this.loadCategories();
  }

  // handleCatChange(event, name) {
  //   const { id } = event.target;
  //   console.log(name);
  //   this.setState({ [name]: id });
  // }

  loadCategories() {
    marketAPI.getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const { changeCategory } = this.props;
    const categoriesList = categories
      .map(({ name, id }, index) => (
        <li
          key={ index }
          data-testid="category"
          onClick={ () => changeCategory(id) }
        >
          {/* quando clica passa o id pra changeCat */}
          { name }
        </li>
      ));
    return (
      <div className="d-flex">
        <aside className="aside categories-list">
          Categorias:
          <ul>
            {categoriesList}
          </ul>
        </aside>
      </div>
    );
  }
}

export default AsideCategoriesList;
