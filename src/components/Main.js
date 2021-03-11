import React from 'react';

class Main extends React.Component {
  render() {
    return(
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default Main;
