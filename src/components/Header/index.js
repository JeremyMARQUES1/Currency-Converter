import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount }) => (
  <header className="header">
    <div className="header__content">
      <h1 className="header__title">Converter</h1>
      <p className="header__amount">{baseAmount} euro</p>
    </div>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
