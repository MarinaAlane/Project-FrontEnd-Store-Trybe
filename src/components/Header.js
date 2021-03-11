import React from 'react';

import ButtonShoppingCart from './ButtonShoppingCart';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <input type="search" name="" id="" className="input-search" />
        <ButtonShoppingCart />
      </header>
    );
  }
}

export default Header;
