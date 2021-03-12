import React from 'react';
import PropTypes from 'prop-types';
import ButtonShoppingCart from './ButtonShoppingCart';

class Header extends React.Component {
  render() {
    const { showInput } = this.props;
    return (
      <header className="header">
        {showInput && <input type="search" name="" id="" className="input-search" />}
        <ButtonShoppingCart />
      </header>
    );
  }
}

Header.propTypes = {
  showInput: PropTypes.bool.isRequired,
};

export default Header;
