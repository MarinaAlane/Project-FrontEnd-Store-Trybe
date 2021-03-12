import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/AsideMenu.css';

class AsideMenu extends Component {
  render() {
    const { menuActive, categories, handleCategoryClick, handleMenuClick } = this.props;
    return (
      <aside className="categories-content">
        { !(menuActive) ? (
          <button
            type="button"
            className="inactiveMenu"
            onClick={ handleMenuClick }
            alt="close menu"
          />
        ) : (
          <button
            type="button"
            className="activeMenu"
            onClick={ handleMenuClick }
            alt="hamburguer menu"
          />
        ) }
        { (menuActive) && (
          <ul className="list-categories">
            {categories.map((categoria) => (
              <li
                data-testid="category"
                key={ categoria.id }
                onClick={ handleCategoryClick }
              >
                { categoria.name }
              </li>))}
          </ul>
        ) }
      </aside>
    );
  }
}

AsideMenu.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default AsideMenu;
