import React from 'react';

class Categorias extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          {categories.map((item) => (
            <li key={ item.id } data-testid="category">
              { item.name }
            </li>
          ))}
        </ul>
      </aside>

    );
  }
}

export default Categorias;
