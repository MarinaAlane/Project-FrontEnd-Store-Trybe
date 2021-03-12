import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

class Home extends React.Component {
  render() {
    const showInput = true;
    return (
      <div>
        <Header showInput={ showInput } />
        <Main />
      </div>
    );
  }
}

export default Home;
