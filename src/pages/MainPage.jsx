import React from 'react';
// import Loading from '../components/Loading';
import { getCategories } from '../services/api';
import Header from '../components/Header';
import Main from '../components/Main';
import Aside from '../components/Aside';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      // loading: true,
    };
  }

  async componentDidMount() {
    return getCategories()
      .then((data) => this
        .setState((lastState) => ({
          ...lastState,
          categories: data,
          loading: false,
        })));
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <Header />
        <Main />
        <Aside categories={ categories } />
      </>
    );
  }
}

export default MainPage;

// if (loading) {
//   return <Loading />;
// }
