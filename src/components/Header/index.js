import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <h1 className="header__title">Converter</h1>
      <p className="header__amount">1 euro</p>
    </div>
  </header>
);

export default Header;
