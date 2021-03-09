import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </header>
    );
  }
}

export default Header;
