import React from 'react';
// requisito2

class InitialPage extends React.Component {
  render() {
    return (
      <div className="App">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default InitialPage;
